import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

// Import images
import image1 from "../Photos/1.png";
import image2 from "../Photos/2.png";
import image3 from "../Photos/10.png";
import image4 from "../Photos/5.png";
import image5 from "../Photos/7.png";
import image6 from "../Photos/3.png";
import image7 from "../Photos/12.png";
import image8 from "../Photos/11.png";

const Timeline = () => {
    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.timeline-list-item');
            const triggerBottom = window.innerHeight * 0.8;

            items.forEach(item => {
                const box = item.getBoundingClientRect();
                item.classList.toggle('visible', box.top < triggerBottom);
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const events = [
        { title: 'البداية: مرحلة ما قبل المعسكر', date: 'يناير 2024', image: image1, link: '/phase-one', description: 'في ظل التخطيط والتحضير المبكر، كان فريق "فريد" يتشكل في الخفاء، ممهداً لانطلاقة غير متوقعة ومليئة بالتحديات.' },
        { title: 'مرحلة الانطلاقة والتكوين',date: 'يناير 2024', image: image2, link: '/phase-two', description: ' حين اجتمع فريد، بدأت ملامح جديدة تتشكل… الانطلاقة كانت مجرد البداية.' },
        { title: 'مرحلة الفرص والتحديات',date: 'يناير 2024', image: image3, link: '/phase-three', description: 'وصف قصير عن المرحلة الثالثة.' },
        { title: 'المرحلة الأولى: التدريب الفردي',date: 'يناير 2024', image: image4, link: '/coming-soon', description: 'وصف قصير عن المرحلة الرابعة.' },
        { title: 'المرحلة الثانية: تكوين الفرق والاعتماد', date: 'يناير 2024', image: image5, link: '/phase-five', description: ' فريق “فريد” يقف عند عتبة لحظة حاسمة قد تقلب الموازين.' },
        { title: 'مرحلة النمو والتطور',date: 'يناير 2024', image: image6, link: '/coming-soon', description: 'وصف قصير عن المرحلة السادسة.' },
        { title: 'الأنشطة الاحتفالية والمجتمعية', date: 'يناير 2024', image: image7, link: '/phase-seven', description: 'حيث نصنع الأثر ونشارك القيم مع المجتمع!' },
        { title: 'المرحلة الثالثة: تقديم المشروع', date: 'يناير 2024', image: image8, link: '/coming-soon', description: 'وصف قصير عن المرحلة الثامنة.' },
    ];

    return (
        <div className="timeline-container">
            <div className="timeline-list">
                <ul>
                    {events.map((event, index) => (
                        <li key={index} className={`timeline-list-item ${index % 2 === 0 ? 'odd' : 'even'}`}>
                            <img src={event.image} alt={event.title} className="timeline-image" />
                            <h3 className="timeline-heading">{event.title}</h3>
                            <p className="timeline-description">{event.description}</p> 
                            <Link to={event.link}>اقرأ المزيد <i className="fas fa-chevron-left"></i></Link>
                            <span className="timeline-circle"></span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Timeline;