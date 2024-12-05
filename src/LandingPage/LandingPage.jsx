import React from 'react';
import './LandingPage.css'; // Ensure this CSS file is in the same directory
import photo from "../Photos/6.png"; // Adjust the path as needed

const LandingPage = () => {
    return (
        <div className="body">
            <section className="main">
                <section className="left">
                    <p className="title">مين فريد؟</p>
                    <p className="msg">
               
          فريد هي شركة إفتراضية، واحدة من أهم الشركات الإفتراضية الرائدة في
          معسكر أكاديمية إقرار المحاسبية التطبيقية ، تأسست عام 2024م لتنشئ بيئة
          محاسبية إفتراضية تحاكي وتوافق رؤية المملكة العربية السعودية 2030 ،
          لتنتج أفراد محاسبين قادرين على تجاوز تحديات سوق العمل

                    </p>
                    <button className="cta">المزيد</button>
                </section>

                <section className="right">
                    <img src={photo} alt="صورة الهبوط" />
                </section>
            </section>
        </div>
    );
};

export default LandingPage;