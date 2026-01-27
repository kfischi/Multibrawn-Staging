import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Content */}
        <div className={styles.grid}>
          {/* About */}
          <div className={styles.section}>
            <h3 className={styles.title}>MULTIBRAWN</h3>
            <p className={styles.description}>
              מציאת מקומות נופש מושלמים זה מה שאנחנו עושים הכי טוב.
              9+ שנות ניסיון במציאת החופשה המושלמת עבורכם.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h4 className={styles.heading}>קישורים מהירים</h4>
            <nav className={styles.links}>
              <Link href="/" className={styles.link}>בית</Link>
              <Link href="/gallery" className={styles.link}>גלריה</Link>
              <Link href="/about" className={styles.link}>אודות</Link>
              <Link href="/contact" className={styles.link}>צור קשר</Link>
              <Link href="/tips" className={styles.link}>טיפים</Link>
            </nav>
          </div>

          {/* Legal */}
          <div className={styles.section}>
            <h4 className={styles.heading}>מידע משפטי</h4>
            <nav className={styles.links}>
              <Link href="/privacy" className={styles.link}>מדיניות פרטיות</Link>
              <Link href="/terms" className={styles.link}>תנאי שימוש</Link>
              <Link href="/accessibility-statement" className={styles.link}>הצהרת נגישות</Link>
              <Link href="/faq" className={styles.link}>שאלות נפוצות</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <h4 className={styles.heading}>צור קשר</h4>
            <div className={styles.contactInfo}>
              <a href="tel:+972523983394" className={styles.contactLink}>
                <Phone size={18} />
                <span>052-398-3394</span>
              </a>
              <a href="mailto:info@multibrawn.co.il" className={styles.contactLink}>
                <Mail size={18} />
                <span>info@multibrawn.co.il</span>
              </a>
            </div>
            
            {/* Social Media */}
            <div className={styles.socialLinks}>
              <a href="https://facebook.com/multibrawn" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/multibrawn" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@multibrawn" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} MULTIBRAWN. כל הזכויות שמורות.
          </p>
          <p className={styles.credit}>
            עוצב ונבנה על ידי <span className={styles.highlight}>Claude + Multibrawn</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
