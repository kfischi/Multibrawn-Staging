#!/usr/bin/env python3
"""
🚀 MULTIBRAWN Tzimer360 Affiliate Processor
Automatically converts Tzimer360 listings to MULTIBRAWN properties
"""

import os
import sys
import json
import base64
import requests
from bs4 import BeautifulSoup
from datetime import datetime
import time
import re
from pathlib import Path

# ==================== CONFIGURATION ====================

REPO_ROOT = Path(__file__).parent.parent
PROPERTIES_JSON = REPO_ROOT / "src/data/properties.json"
AFFILIATE_LINKS = REPO_ROOT / "affiliate-links.txt"

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
CLOUDINARY_CLOUD = os.getenv("CLOUDINARY_CLOUD_NAME", "dptyfvwyo")
CLOUDINARY_KEY = os.getenv("CLOUDINARY_API_KEY")
CLOUDINARY_SECRET = os.getenv("CLOUDINARY_API_SECRET")

# ==================== HEBREW TRANSLITERATION ====================

HEBREW_TO_ENGLISH = {
    'א': 'a', 'ב': 'b', 'ג': 'g', 'ד': 'd', 'ה': 'h', 'ו': 'v',
    'ז': 'z', 'ח': 'ch', 'ט': 't', 'י': 'y', 'כ': 'k', 'ך': 'k',
    'ל': 'l', 'מ': 'm', 'ם': 'm', 'נ': 'n', 'ן': 'n', 'ס': 's',
    'ע': 'a', 'פ': 'f', 'ף': 'f', 'צ': 'tz', 'ץ': 'tz', 'ק': 'k',
    'ר': 'r', 'ש': 'sh', 'ת': 't'
}

# ==================== MAIN PROCESSOR CLASS ====================

class TzimerProcessor:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                         '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        })
    
    # ==================== SCRAPING ====================
    
    def scrape_property(self, url):
        """Scrape property data from Tzimer360"""
        print(f"\n{'='*60}")
        print(f"🔍 SCRAPING: {url}")
        print(f"{'='*60}\n")
        
        try:
            response = self.session.get(url, timeout=30)
            response.raise_for_status()
            soup = BeautifulSoup(response.content, 'html.parser')
            
            data = {
                'original_url': url,
                'name': self._extract_name(soup),
                'location': self._extract_location(soup),
                'region': self._extract_region(soup),
                'description': self._extract_description(soup),
                'type': self._extract_type(soup),
                'images': self._extract_images(soup, url),
                'price': self._extract_price(soup),
                'features': self._extract_features(soup),
                'bedrooms': self._extract_bedrooms(soup),
                'guests': self._extract_guests(soup),
                'bathrooms': self._extract_bathrooms(soup),
            }
            
            print(f"✅ Extracted data:")
            print(f"   Name: {data['name']}")
            print(f"   Location: {data['location']}")
            print(f"   Region: {data['region']}")
            print(f"   Images: {len(data['images'])} found")
            
            return data
            
        except Exception as e:
            print(f"❌ Error scraping {url}: {e}")
            raise
    
    def _extract_name(self, soup):
        """Extract property name"""
        # Try multiple selectors
        selectors = ['h1', 'title', '.property-name', '.listing-title']
        for selector in selectors:
            tag = soup.select_one(selector)
            if tag:
                name = tag.get_text(strip=True)
                # Clean up
                name = re.sub(r'\s*[\|\-]\s*Tzimer360.*', '', name, flags=re.IGNORECASE)
                if len(name) > 5:
                    return name
        return "נכס נופש מיוחד"
    
    def _extract_location(self, soup):
        """Extract location/city"""
        # Try common location patterns
        patterns = [
            r'(?:מיקום|כתובת|נמצא ב)[\s:]*([א-ת\s]+)',
            r'([א-ת\s]{3,20}),\s*(?:צפון|מרכז|דרום|ירושלים)',
        ]
        
        text = soup.get_text()
        for pattern in patterns:
            match = re.search(pattern, text)
            if match:
                return match.group(1).strip()
        
        return "ישראל"
    
    def _extract_region(self, soup):
        """Extract region (צפון/מרכז/דרום/ירושלים)"""
        text = soup.get_text().lower()
        
        north_keywords = ['גליל', 'כנרת', 'צפת', 'טבריה', 'נהריה', 'גולן', 'חולה']
        center_keywords = ['תל אביב', 'הרצליה', 'נתניה', 'רעננה', 'כפר סבא', 'ראשון']
        south_keywords = ['נגב', 'אילת', 'מצפה רמון', 'באר שבע', 'ערד']
        jerusalem_keywords = ['ירושלים', 'בית שמש', 'מודיעין', 'מבשרת']
        
        if any(kw in text for kw in north_keywords):
            return 'צפון'
        elif any(kw in text for kw in center_keywords):
            return 'מרכז'
        elif any(kw in text for kw in jerusalem_keywords):
            return 'ירושלים'
        elif any(kw in text for kw in south_keywords):
            return 'דרום'
        
        return 'צפון'  # Default
    
    def _extract_description(self, soup):
        """Extract property description"""
        # Try common description selectors
        selectors = [
            '.description', '.about', '.details', '.property-description',
            '[class*="description"]', '[class*="about"]'
        ]
        
        for selector in selectors:
            tag = soup.select_one(selector)
            if tag:
                desc = tag.get_text(strip=True)
                if len(desc) > 50:
                    # Limit to 500 chars, full sentences
                    desc = desc[:500]
                    last_period = desc.rfind('.')
                    if last_period > 100:
                        desc = desc[:last_period + 1]
                    return desc
        
        return "נכס נופש מדהים באזור שקט ומרהיב. מושלם למשפחות וזוגות המחפשים חוויה בלתי נשכחת."
    
    def _extract_type(self, soup):
        """Extract property type"""
        text = soup.get_text().lower()
        
        if 'וילה' in text or 'villa' in text:
            return 'villa'
        elif 'מלון' in text or 'hotel' in text:
            return 'hotel'
        elif 'דירה' in text or 'apartment' in text:
            return 'apartment'
        else:
            return 'zimmer'
    
    def _extract_images(self, soup, base_url):
        """Extract all relevant image URLs"""
        images = []
        seen = set()
        
        # Find all img tags
        for img in soup.find_all('img'):
            src = img.get('src') or img.get('data-src') or img.get('data-lazy-src')
            
            if not src:
                continue
            
            # Make absolute URL
            if src.startswith('//'):
                src = 'https:' + src
            elif src.startswith('/'):
                from urllib.parse import urlparse
                parsed = urlparse(base_url)
                src = f"{parsed.scheme}://{parsed.netloc}{src}"
            elif not src.startswith('http'):
                continue
            
            # Filter out small/icon images
            if any(skip in src.lower() for skip in ['logo', 'icon', 'avatar', 'button', 'arrow']):
                continue
            
            # Check if already seen
            if src in seen:
                continue
            
            seen.add(src)
            images.append(src)
            
            if len(images) >= 15:  # Limit to 15 images
                break
        
        print(f"   Found {len(images)} images")
        return images
    
    def _extract_price(self, soup):
        """Extract price per night"""
        text = soup.get_text()
        
        # Look for price patterns
        patterns = [
            r'₪\s*(\d+)',
            r'(\d+)\s*₪',
            r'מחיר[\s:]+(\d+)',
        ]
        
        for pattern in patterns:
            matches = re.findall(pattern, text)
            if matches:
                prices = [int(m) for m in matches]
                # Filter realistic prices (200-5000)
                prices = [p for p in prices if 200 <= p <= 5000]
                if prices:
                    return min(prices)  # Return lowest price
        
        return 1200  # Default
    
    def _extract_features(self, soup):
        """Extract property features"""
        features = []
        text = soup.get_text()
        
        feature_map = {
            'בריכה': 'בריכה פרטית',
            'pool': 'בריכה פרטית',
            'ג\'קוזי': 'ג\'קוזי',
            'jacuzzi': 'ג\'קוזי',
            'מנגל': 'אזור מנגל',
            'bbq': 'אזור מנגל',
            'נוף': 'נוף פנורמי',
            'view': 'נוף מרהיב',
            'גינה': 'גינה מטופחת',
            'garden': 'גינה',
            'מטבח': 'מטבח מאובזר',
            'kitchen': 'מטבח מאובזר',
        }
        
        for keyword, feature in feature_map.items():
            if keyword in text.lower() and feature not in features:
                features.append(feature)
        
        if not features:
            features = ['נוף מרהיב', 'שקט ופרטיות']
        
        return features[:6]  # Limit to 6 features
    
    def _extract_bedrooms(self, soup):
        """Extract bedroom count"""
        text = soup.get_text()
        patterns = [
            r'(\d+)\s*חדר(?:י)?\s*שינה',
            r'(\d+)\s*bedroom',
        ]
        
        for pattern in patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return int(match.group(1))
        
        return 2  # Default
    
    def _extract_guests(self, soup):
        """Extract guest capacity"""
        text = soup.get_text()
        patterns = [
            r'עד\s*(\d+)\s*אורח',
            r'(\d+)\s*guests',
            r'מתאים ל[־\s]*(\d+)',
        ]
        
        for pattern in patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return int(match.group(1))
        
        return 4  # Default
    
    def _extract_bathrooms(self, soup):
        """Extract bathroom count"""
        text = soup.get_text()
        patterns = [
            r'(\d+)\s*שירות',
            r'(\d+)\s*bathroom',
        ]
        
        for pattern in patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return int(match.group(1))
        
        return 1  # Default
    
    # ==================== NAMING & SLUG ====================
    
    def generate_multibrawn_name(self, data):
        """Generate unique MULTIBRAWN branded name using Gemini AI"""
        print("\n🎨 Generating unique MULTIBRAWN name with Gemini AI...")
        
        if not GEMINI_API_KEY:
            print("⚠️  No Gemini API key, using default naming")
            return self._generate_fallback_name(data)
        
        prompt = f"""You are a creative naming expert for MULTIBRAWN, a premium vacation rental platform in Israel.

Create a UNIQUE Hebrew name (4-7 words) for this property based on these details:

Original name: {data['name']} (DON'T use this directly!)
Location: {data['location']}
Region: {data['region']}
Type: {data['type']}
Features: {', '.join(data['features'])}
Bedrooms: {data['bedrooms']}
Guests: {data['guests']}
Description: {data['description'][:200]}

CRITICAL RULES:
1. Create a UNIQUE name - combine SPECIFIC details that NO other property has
2. Include location essence (NOT exact name) - use region character
3. Highlight unique features in detail (e.g., "בריכה מחוממת אינסוף" not just "בריכה")
4. Natural, appealing, magazine-quality Hebrew
5. NO generic patterns like "צימר בגליל" or "וילה בצפון"
6. Think: what makes THIS property truly different?

GOOD EXAMPLES:
✅ "צימר רומנטי עם בריכה מחוממת בגליל המערבי"
✅ "וילה מרווחת 5 חדרים וג'קוזי ספא נוף כנרת"
✅ "סוויטת יוקרה מודרנית קומה גבוהה נוף ים פתוח"
✅ "מתחם אירועים שטחי דשא ומנגל מקורה בכרמל"

BAD EXAMPLES:
❌ "צימר הגליל" - too generic
❌ "וילת הכרמל" - boring
❌ "בית הנוף" - could be anywhere

Return ONLY the Hebrew name (4-7 words), nothing else."""

        try:
            response = requests.post(
                f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key={GEMINI_API_KEY}",
                json={
                    "contents": [{"parts": [{"text": prompt}]}],
                    "generationConfig": {
                        "temperature": 0.9,
                        "maxOutputTokens": 100
                    }
                },
                timeout=30
            )
            
            result = response.json()
            name = result['candidates'][0]['content']['parts'][0]['text'].strip()
            
            # Clean up any markdown or extra text
            name = re.sub(r'[*`"\']', '', name)
            name = name.strip()
            
            print(f"✨ Generated name: {name}")
            return name
            
        except Exception as e:
            print(f"⚠️  Gemini API error: {e}")
            return self._generate_fallback_name(data)
    
    def _generate_fallback_name(self, data):
        """Fallback naming if Gemini fails"""
        type_map = {
            'zimmer': 'צימר',
            'villa': 'וילה',
            'apartment': 'דירת נופש',
            'hotel': 'מלון בוטיק'
        }
        
        type_name = type_map.get(data['type'], 'צימר')
        features = data['features'][:2]
        
        # Build name
        parts = [type_name]
        
        if features:
            parts.extend(features)
        
        parts.append(f"ב{data['region']}")
        
        return ' '.join(parts)
    
    def create_slug(self, name):
        """Create URL-friendly slug from Hebrew name"""
        slug = name.lower()
        
        # Transliterate Hebrew to English
        for heb, eng in HEBREW_TO_ENGLISH.items():
            slug = slug.replace(heb, eng)
        
        # Replace spaces and special chars with hyphens
        slug = re.sub(r'[^a-z0-9]+', '-', slug)
        slug = slug.strip('-')[:50]
        
        # Add timestamp for uniqueness
        slug += f"-{int(time.time()) % 1000000}"
        
        return slug
    
    # ==================== CLOUDINARY ====================
    
    def upload_to_cloudinary(self, image_url, slug, index):
        """Upload image to Cloudinary with optimization"""
        print(f"☁️  Uploading image {index}/5 to Cloudinary...")
        
        if not CLOUDINARY_KEY or not CLOUDINARY_SECRET:
            print("⚠️  No Cloudinary credentials, using original URL")
            return image_url
        
        try:
            public_id = f"affiliate-properties/{slug}-{index}"
            
            response = requests.post(
                f"https://api.cloudinary.com/v1_1/{CLOUDINARY_CLOUD}/image/upload",
                data={
                    'file': image_url,
                    'public_id': public_id,
                    'folder': 'affiliate-properties',
                    'transformation': 'w_1920,q_auto:good,f_auto',
                    'api_key': CLOUDINARY_KEY,
                    'timestamp': int(time.time()),
                },
                auth=(CLOUDINARY_KEY, CLOUDINARY_SECRET),
                timeout=60
            )
            
            result = response.json()
            
            if 'secure_url' in result:
                print(f"   ✅ Uploaded successfully")
                return result['secure_url']
            else:
                print(f"   ⚠️  Upload failed: {result}")
                return image_url
                
        except Exception as e:
            print(f"   ⚠️  Cloudinary error: {e}")
            return image_url
    
    # ==================== PROPERTY JSON ====================
    
    def create_property_object(self, data, multibrawn_name, slug, cloudinary_images):
        """Create property JSON object for properties.json"""
        return {
            "id": f"aff-{int(time.time())}",
            "slug": slug,
            "name": multibrawn_name,
            "location": data['location'],
            "region": data['region'],
            "description": data['description'],
            "type": data['type'],
            "category": "selected",
            "guests": f"עד {data['guests']} אורחים",
            "bedrooms": data['bedrooms'],
            "bathrooms": data['bathrooms'],
            "rating": 4.8,
            "pricePerNight": data['price'],
            "features": data['features'],
            "amenities": ["Wi-Fi מהיר", "מטבח מאובזר", "חניה פרטית", "מזגן"],
            "images": cloudinary_images,
            "contactPhone": "052-398-3394",
            "checkIn": "15:00",
            "checkOut": "11:00",
            "minNights": 2,
            "whatsapp": "972523983394",
            "affiliateUrl": data['original_url'],
            "isFeatured": True,
            "isAvailable": True,
            "createdAt": datetime.now().isoformat(),
            "updatedAt": datetime.now().isoformat(),
            "source": "github-actions-tzimer-processor",
            "cloudinaryFolder": "affiliate-properties"
        }
    
    def update_properties_json(self, new_property):
        """Add new property to properties.json"""
        print("\n📊 Updating properties.json...")
        
        try:
            # Read current properties
            with open(PROPERTIES_JSON, 'r', encoding='utf-8') as f:
                properties = json.load(f)
            
            # Ensure it's a list
            if not isinstance(properties, list):
                print("⚠️  properties.json is not a list, creating new list")
                properties = []
            
            # Add new property at beginning (Netflix style - newest first)
            properties.insert(0, new_property)
            
            # Write back
            with open(PROPERTIES_JSON, 'w', encoding='utf-8') as f:
                json.dump(properties, f, ensure_ascii=False, indent=2)
            
            print(f"✅ Added property to properties.json (total: {len(properties)})")
            
        except Exception as e:
            print(f"❌ Error updating properties.json: {e}")
            raise
    
    # ==================== MAIN PROCESSING ====================
    
    def process_url(self, url):
        """Process single Tzimer360 URL - complete pipeline"""
        print(f"\n{'━'*60}")
        print(f"🚀 PROCESSING TZIMER360 URL")
        print(f"{'━'*60}")
        
        start_time = time.time()
        
        try:
            # Step 1: Scrape
            data = self.scrape_property(url)
            
            # Step 2: Generate unique MULTIBRAWN name
            multibrawn_name = self.generate_multibrawn_name(data)
            slug = self.create_slug(multibrawn_name)
            
            print(f"\n✨ MULTIBRAWN Branding:")
            print(f"   Name: {multibrawn_name}")
            print(f"   Slug: {slug}")
            
            # Step 3: Upload best 4-5 images to Cloudinary
            print(f"\n☁️  Uploading images to Cloudinary...")
            cloudinary_images = []
            
            # Select best images (limit to 5)
            images_to_upload = data['images'][:5]
            
            for i, img_url in enumerate(images_to_upload, 1):
                cloud_url = self.upload_to_cloudinary(img_url, slug, i)
                cloudinary_images.append(cloud_url)
            
            print(f"✅ Uploaded {len(cloudinary_images)} images")
            
            # Step 4: Create property object
            property_obj = self.create_property_object(
                data, multibrawn_name, slug, cloudinary_images
            )
            
            # Step 5: Update properties.json
            self.update_properties_json(property_obj)
            
            elapsed = time.time() - start_time
            
            print(f"\n{'━'*60}")
            print(f"✅ SUCCESS! Property processed in {elapsed:.1f}s")
            print(f"{'━'*60}")
            print(f"\n📍 Live URL (after deploy):")
            print(f"   https://staging.multibrawn.co.il/properties/{slug}")
            print(f"\n🎨 Gallery:")
            print(f"   https://staging.multibrawn.co.il/selected")
            print(f"\n")
            
            return property_obj
            
        except Exception as e:
            print(f"\n❌ FAILED: {e}")
            import traceback
            traceback.print_exc()
            raise

# ==================== MAIN ENTRY POINT ====================

def main():
    """Main entry point for GitHub Actions"""
    print("="*60)
    print("🚀 MULTIBRAWN Tzimer360 Affiliate Processor")
    print("="*60)
    print()
    
    # Check for affiliate links file
    if not AFFILIATE_LINKS.exists():
        print("ℹ️  No affiliate-links.txt file found")
        print("   Create one with Tzimer360 URLs (one per line)")
        return
    
    # Read URLs
    with open(AFFILIATE_LINKS, 'r', encoding='utf-8') as f:
        urls = [line.strip() for line in f if line.strip() and not line.startswith('#')]
    
    if not urls:
        print("ℹ️  No URLs found in affiliate-links.txt")
        return
    
    print(f"📋 Found {len(urls)} URL(s) to process\n")
    
    # Create processor
    processor = TzimerProcessor()
    
    # Process each URL
    success_count = 0
    for i, url in enumerate(urls, 1):
        print(f"\n{'='*60}")
        print(f"Processing {i}/{len(urls)}")
        print(f"{'='*60}")
        
        try:
            processor.process_url(url)
            success_count += 1
        except Exception as e:
            print(f"❌ Failed to process {url}: {e}")
            continue
    
    # Summary
    print("\n" + "="*60)
    print(f"🎉 PROCESSING COMPLETE")
    print("="*60)
    print(f"✅ Successfully processed: {success_count}/{len(urls)}")
    print(f"❌ Failed: {len(urls) - success_count}/{len(urls)}")
    print()
    print("🌐 Check your site:")
    print("   https://staging.multibrawn.co.il/selected")
    print("="*60)

if __name__ == "__main__":
    main()
