import React from "react";
import "../Footer/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer flex">
      <div className="footer-content">
        <p>
          فريد هي شركة إفتراضية، واحدة من أهم الشركات الإفتراضية الرائدة في معسكر أكاديمية إقرار المحاسبية التطبيقية، 
          تأسست عام 2024م لتنشئ بيئة محاسبية إفتراضية تحاكي وتوافق رؤية المملكة العربية السعودية 2030، 
          لتنتج أفراد محاسبين قادرين على تجاوز تحديات سوق العمل.
        </p>
        <p>© 2024 جميع الحقوق محفوظة. جميع الحقوق محفوظة لفريق فريد.</p>
        <ul className="footer-links flex">
          <li><a href="privacy">سياسة الخصوصية</a></li>
          <li><a href="terms">شروط الاستخدام</a></li>
          <li><a href="contact">اتصل بنا</a></li>
        </ul>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
}