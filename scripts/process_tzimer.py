#!/usr/bin/env python3
"""
🚀 MULTIBRAWN Tzimer360 Complete Processor
Creates: properties.json + landing pages + mockups + everything!
"""

import os
import sys
import json
import requests
from bs4 import BeautifulSoup
from datetime import datetime
import time
import re
from pathlib import Path

# ==================== CONFIG ====================

REPO_ROOT = Path(__file__).parent.parent
PROPERTIES_JSON = REPO_ROOT / "src/data/properties.json"
AFFILIATE_LINKS = REPO_ROOT / "affiliate-links.txt"
PROPERTIES_DIR = REPO_ROOT / "src/app/(marketing)/properties"
MOCKUPS_DIR = REPO_ROOT / "public/mockups"

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
CLOUDINARY_CLOUD = os.getenv("CLOUDINARY_CLOUD_NAME", "dptyfvwyo")
CLOUDINARY_KEY = os.getenv("CLOUDINARY_API_KEY")
CLOUDINARY_SECRET = os.getenv("CLOUDINARY_API_SECRET")

HEBREW_TO_ENGLISH = {
    'א': 'a', 'ב': 'b', 'ג': 'g', 'ד': 'd', 'ה': 'h', 'ו': 'v',
    'ז': 'z', 'ח': 'ch', 'ט': 't', 'י': 'y', 'כ': 'k', 'ך': 'k',
    'ל': 'l', 'מ': 'm', 'ם': 'm', 'נ': 'n', 'ן': 'n', 'ס': 's',
    'ע': 'a', 'פ': 'f', 'ף': 'f', 'צ': 'tz', 'ץ': 'tz', 'ק': 'k',
    'ר': 'r', 'ש': 'sh', 'ת': 't'
}

# ==================== PROCESSOR ====================

class TzimerProcessor:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
    
    def scrape_property(self, url):
        """Scrape Tzimer360 property"""
        print(f"\n🔍 SCRAPING: {url}")
        
        response = self.session.get(url, timeout=30)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        data = {
            'original_url': url,
            'name': self._extract_text(soup, ['h1', 'title']),
            'location': self._extract_text(soup, ['.location', '.address']),
            'region': 'צפון',  # Default
            'description': self._extract_text(soup, ['.description', '.about']),
            'type': 'zimmer',
            'images': self._extract_images(soup, url),
            'price': 1200,
            'features': ['נוף מרהיב', 'שקט ופרטיות'],
            'bedrooms': 2,
            'guests': 4,
            'bathrooms': 1,
        }
        
        print(f"✅ Extracted: {data['name']}")
        print(f"   Images: {len(data['images'])}")
        
        return data
    
    def _extract_text(self, soup, selectors):
        """Extract text from soup"""
        for sel in selectors:
            tag = soup.select_one(sel)
            if tag:
                text = tag.get_text(strip=True)
                if len(text) > 3:
                    return text[:500]
        return "נכס נופש מדהים"
    
    def _extract_images(self, soup, base_url):
        """Extract images"""
        images = []
        for img in soup.find_all('img'):
            src = img.get('src') or img.get('data-src')
            if src and any(ext in src for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                if src.startswith('//'):
                    src = 'https:' + src
                elif src.startswith('/'):
                    from urllib.parse import urlparse
                    parsed = urlparse(base_url)
                    src = f"{parsed.scheme}://{parsed.netloc}{src}"
                
                if src.startswith('http') and 'logo' not in src.lower():
                    images.append(src)
                    
                if len(images) >= 10:
                    break
        
        return images or ['https://via.placeholder.com/800x600']
    
    def generate_name(self, data):
        """Generate unique MULTIBRAWN name"""
        print("🎨 Generating unique name with Gemini...")
        
        if not GEMINI_API_KEY:
            return f"צימר מדהים ב{data['region']}"
        
        prompt = f"""Create a UNIQUE Hebrew name (4-7 words) for this property:
Location: {data['location']}
Region: {data['region']}
Type: {data['type']}
Features: {', '.join(data['features'])}

Rules:
1. MUST be unique - combine SPECIFIC details
2. Include location essence
3. Highlight unique features
4. Natural Hebrew
5. NO generic names

Return ONLY the Hebrew name."""

        try:
            response = requests.post(
                f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key={GEMINI_API_KEY}",
                json={
                    "contents": [{"parts": [{"text": prompt}]}],
                    "generationConfig": {"temperature": 0.9}
                },
                timeout=30
            )
            
            result = response.json()
            name = result['candidates'][0]['content']['parts'][0]['text'].strip()
            name = re.sub(r'[*`"\']', '', name).strip()
            
            print(f"✨ Generated: {name}")
            return name
        except:
            return f"צימר יוקרתי עם {data['features'][0]} ב{data['region']}"
    
    def create_slug(self, name):
        """Create URL slug"""
        slug = name.lower()
        for heb, eng in HEBREW_TO_ENGLISH.items():
            slug = slug.replace(heb, eng)
        slug = re.sub(r'[^a-z0-9]+', '-', slug)
        slug = slug.strip('-')[:50]
        slug += f"-{int(time.time()) % 1000000}"
        return slug
    
    def upload_to_cloudinary(self, image_url, slug, index):
        """Upload to Cloudinary"""
        print(f"☁️  Uploading image {index}/5...")
        
        if not CLOUDINARY_KEY or not CLOUDINARY_SECRET:
            return image_url
        
        try:
            response = requests.post(
                f"https://api.cloudinary.com/v1_1/{CLOUDINARY_CLOUD}/image/upload",
                data={
                    'file': image_url,
                    'public_id': f"affiliate-properties/{slug}-{index}",
                    'transformation': 'w_1920,q_auto:good,f_auto',
                    'api_key': CLOUDINARY_KEY,
                    'timestamp': int(time.time()),
                },
                auth=(CLOUDINARY_KEY, CLOUDINARY_SECRET),
                timeout=60
            )
            
            result = response.json()
            if 'secure_url' in result:
                print(f"   ✅ Uploaded")
                return result['secure_url']
        except:
            pass
        
        return image_url
    
    def create_property_object(self, data, name, slug, images):
        """Create property JSON"""
        return {
            "id": f"aff-{int(time.time())}",
            "slug": slug,
            "name": name,
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
            "amenities": ["Wi-Fi", "מטבח מאובזר", "חניה"],
            "images": images,
            "contactPhone": "052-398-3394",
            "checkIn": "15:00",
            "checkOut": "11:00",
            "minNights": 2,
            "whatsapp": "972523983394",
            "affiliateUrl": data['original_url'],
            "isFeatured": True,
            "isAvailable": True,
            "createdAt": datetime.now().isoformat(),
            "source": "github-actions-complete",
            "cloudinaryFolder": "affiliate-properties"
        }
    
    def create_landing_page(self, property_obj, slug):
        """Create Next.js landing page"""
        print(f"📄 Creating landing page...")
        
        page_dir = PROPERTIES_DIR / slug
        page_dir.mkdir(parents=True, exist_ok=True)
        
        # page.tsx
        page_content = f"""import {{ Metadata }} from 'next';
import PropertyPageClient from './PropertyPageClient';

export const metadata: Metadata = {{
  title: '{property_obj["name"]} | MULTIBRAWN',
  description: '{property_obj["description"][:150]}',
}};

export default function PropertyPage() {{
  return <PropertyPageClient />;
}}
"""
        
        (page_dir / 'page.tsx').write_text(page_content, encoding='utf-8')
        
        # PropertyPageClient.tsx
        client_content = f"""'use client';

import {{ useState }} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const property = {json.dumps(property_obj, ensure_ascii=False, indent=2)};

export default function PropertyPageClient() {{
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {{/* Hero Section */}}
      <section className="relative h-[60vh] bg-black">
        <Image
          src={{property.images[selectedImage]}}
          alt={{property.name}}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {{property.name}}
            </h1>
            <p className="text-xl text-white/90">
              {{property.location}} • {{property.region}}
            </p>
          </div>
        </div>
      </section>

      {{/* Image Gallery */}}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-2">
          {{property.images.map((img, idx) => (
            <button
              key={{idx}}
              onClick={{() => setSelectedImage(idx)}}
              className={{`relative h-24 rounded-lg overflow-hidden ${{
                idx === selectedImage ? 'ring-4 ring-purple-500' : ''
              }}`}}
            >
              <Image
                src={{img}}
                alt={{`תמונה ${{idx + 1}}`}}
                fill
                className="object-cover"
              />
            </button>
          ))}}
        </div>
      </section>

      {{/* Details */}}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {{/* Main Content */}}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">תיאור הנכס</h2>
              <p className="text-gray-700 leading-relaxed">
                {{property.description}}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">מתקנים ושירותים</h2>
              <div className="grid grid-cols-2 gap-4">
                {{property.features.map((feature) => (
                  <div key={{feature}} className="flex items-center gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>{{feature}}</span>
                  </div>
                ))}}
              </div>
            </div>
          </div>

          {{/* Sidebar */}}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-4">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  ₪{{property.pricePerNight}}
                </div>
                <div className="text-gray-600">ללילה</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">אורחים</span>
                  <span className="font-semibold">{{property.guests}}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">חדרי שינה</span>
                  <span className="font-semibold">{{property.bedrooms}}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">שירותים</span>
                  <span className="font-semibold">{{property.bathrooms}}</span>
                </div>
              </div>

              <a
                href={{property.affiliateUrl}}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:opacity-90 transition"
              >
                🔗 הזמן עכשיו באתר השותף
              </a>

              <p className="text-xs text-gray-500 text-center mt-3">
                * המחיר והזמינות כפופים לתנאי האתר השותף
              </p>
            </div>
          </div>
        </div>
      </section>

      {{/* Back Link */}}
      <section className="container mx-auto px-4 py-8">
        <Link
          href="/selected"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700"
        >
          ← חזרה לגלריה
        </Link>
      </section>
    </div>
  );
}}
"""
        
        (page_dir / 'PropertyPageClient.tsx').write_text(client_content, encoding='utf-8')
        
        print(f"✅ Created landing page files")
    
    def create_mockup(self, property_obj, slug):
        """Create HTML mockup"""
        print(f"🎨 Creating mockup...")
        
        MOCKUPS_DIR.mkdir(parents=True, exist_ok=True)
        
        images_html = '\n'.join([
            f'<div class="swiper-slide"><img src="{img}" loading="lazy" /></div>'
            for img in property_obj['images'][:5]
        ])
        
        features_html = '\n'.join([
            f'<div class="feature-item">✓ {feat}</div>'
            for feat in property_obj['features']
        ])
        
        mockup_html = f"""<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{property_obj['name']} - MULTIBRAWN</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
  <style>
    * {{ margin: 0; padding: 0; box-sizing: border-box; }}
    body {{ font-family: 'Assistant', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 20px; }}
    .container {{ max-width: 900px; margin: 0 auto; background: white; border-radius: 30px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }}
    .header {{ background: linear-gradient(135deg, #00E0FF 0%, #A06BFF 50%, #FF5EA1 100%); padding: 40px; text-align: center; color: white; }}
    .header h1 {{ font-size: 2.5em; margin-bottom: 10px; }}
    .header p {{ font-size: 1.2em; opacity: 0.9; }}
    .swiper {{ width: 100%; height: 500px; }}
    .swiper-slide img {{ width: 100%; height: 100%; object-fit: cover; }}
    .content {{ padding: 40px; }}
    .info-cards {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; margin: 30px 0; }}
    .info-card {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 15px; text-align: center; }}
    .info-card .number {{ font-size: 2em; font-weight: bold; }}
    .info-card .label {{ opacity: 0.9; margin-top: 5px; }}
    .description {{ line-height: 1.8; color: #333; margin: 20px 0; }}
    .features {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 30px 0; }}
    .feature-item {{ padding: 15px; background: #f8f9ff; border-radius: 10px; }}
    .price-section {{ background: linear-gradient(135deg, #00E0FF 0%, #A06BFF 100%); color: white; padding: 30px; border-radius: 20px; text-align: center; margin: 30px 0; }}
    .price {{ font-size: 3em; font-weight: bold; }}
    .cta-button {{ background: white; color: #667eea; padding: 20px 40px; border-radius: 50px; font-size: 1.2em; font-weight: bold; text-decoration: none; display: inline-block; margin-top: 20px; transition: transform 0.3s; }}
    .cta-button:hover {{ transform: scale(1.05); }}
    .footer {{ text-align: center; padding: 30px; background: #f8f9ff; }}
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>{property_obj['name']}</h1>
      <p>{property_obj['location']} • {property_obj['region']}</p>
    </div>

    <div class="swiper">
      <div class="swiper-wrapper">
        {images_html}
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>

    <div class="content">
      <div class="info-cards">
        <div class="info-card">
          <div class="number">{property_obj['guests'].replace('עד ', '').replace(' אורחים', '')}</div>
          <div class="label">אורחים</div>
        </div>
        <div class="info-card">
          <div class="number">{property_obj['bedrooms']}</div>
          <div class="label">חדרי שינה</div>
        </div>
        <div class="info-card">
          <div class="number">{property_obj['rating']}</div>
          <div class="label">דירוג</div>
        </div>
      </div>

      <div class="description">
        <p>{property_obj['description']}</p>
      </div>

      <div class="features">
        {features_html}
      </div>

      <div class="price-section">
        <div class="price">₪{property_obj['pricePerNight']}</div>
        <div>ללילה</div>
        <a href="{property_obj['affiliateUrl']}" target="_blank" class="cta-button">
          🔗 הזמן עכשיו
        </a>
      </div>
    </div>

    <div class="footer">
      <p>© 2025 MULTIBRAWN - כל הזכויות שמורות</p>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script>
    new Swiper('.swiper', {{
      effect: 'fade',
      loop: true,
      autoplay: {{ delay: 3000 }},
      pagination: {{ el: '.swiper-pagination', clickable: true }},
      navigation: {{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }},
      lazy: true
    }});
  </script>
</body>
</html>"""
        
        (MOCKUPS_DIR / f"{slug}.html").write_text(mockup_html, encoding='utf-8')
        
        print(f"✅ Created mockup")
    
    def update_properties_json(self, new_property):
        """Update properties.json"""
        print("📊 Updating properties.json...")
        
        with open(PROPERTIES_JSON, 'r', encoding='utf-8') as f:
            properties = json.load(f)
        
        if not isinstance(properties, list):
            properties = []
        
        properties.insert(0, new_property)
        
        with open(PROPERTIES_JSON, 'w', encoding='utf-8') as f:
            json.dump(properties, f, ensure_ascii=False, indent=2)
        
        print(f"✅ Updated properties.json")
    
    def process_url(self, url):
        """Complete processing pipeline"""
        print(f"\n{'='*60}")
        print(f"🚀 PROCESSING: {url}")
        print(f"{'='*60}")
        
        start = time.time()
        
        # 1. Scrape
        data = self.scrape_property(url)
        
        # 2. Generate name & slug
        name = self.generate_name(data)
        slug = self.create_slug(name)
        
        print(f"\n✨ MULTIBRAWN Branding:")
        print(f"   Name: {name}")
        print(f"   Slug: {slug}")
        
        # 3. Upload images
        print(f"\n☁️  Uploading images...")
        cloudinary_images = []
        for i, img_url in enumerate(data['images'][:5], 1):
            cloud_url = self.upload_to_cloudinary(img_url, slug, i)
            cloudinary_images.append(cloud_url)
        
        # 4. Create property object
        property_obj = self.create_property_object(data, name, slug, cloudinary_images)
        
        # 5. Create landing page
        self.create_landing_page(property_obj, slug)
        
        # 6. Create mockup
        self.create_mockup(property_obj, slug)
        
        # 7. Update JSON
        self.update_properties_json(property_obj)
        
        elapsed = time.time() - start
        
        print(f"\n{'='*60}")
        print(f"✅ SUCCESS in {elapsed:.1f}s")
        print(f"{'='*60}")
        print(f"\n📍 URLs:")
        print(f"   Landing: https://staging.multibrawn.co.il/properties/{slug}")
        print(f"   Mockup: https://staging.multibrawn.co.il/mockups/{slug}.html")
        print(f"   Gallery: https://staging.multibrawn.co.il/selected")
        print()
        
        return property_obj

# ==================== MAIN ====================

def main():
    print("=" * 60)
    print("🚀 MULTIBRAWN Complete Processor")
    print("=" * 60)
    
    if not AFFILIATE_LINKS.exists():
        print("ℹ️  No affiliate-links.txt")
        return
    
    with open(AFFILIATE_LINKS, 'r', encoding='utf-8') as f:
        urls = [line.strip() for line in f if line.strip() and not line.startswith('#')]
    
    if not urls:
        print("ℹ️  No URLs found")
        return
    
    print(f"\n📋 Found {len(urls)} URL(s)\n")
    
    processor = TzimerProcessor()
    success = 0
    
    for i, url in enumerate(urls, 1):
        print(f"\n{'='*60}")
        print(f"Processing {i}/{len(urls)}")
        print(f"{'='*60}")
        
        try:
            processor.process_url(url)
            success += 1
        except Exception as e:
            print(f"❌ Failed: {e}")
    
    print("\n" + "="*60)
    print(f"🎉 COMPLETE: {success}/{len(urls)} succeeded")
    print("="*60)

if __name__ == "__main__":
    main()
