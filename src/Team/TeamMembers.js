import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './TeamMembers.css';
import image1 from '../Photos/image1.jpg';
import image2 from '../Photos/image2.jpg';
import image3 from '../Photos/image3.jpg';

const teamMembers = [
    { name: 'عبدالله الخوتيم', position: 'موارد بشرية', image: image1, description: 'عبدالله يدير شؤون الموارد البشرية بكفاءة عالية.' },
    { name: 'ساره المطيري', position: 'مدير مالي', image: image2, description: 'ساره تتولى المسؤوليات المالية وتضمن الشفافية.' },
    { name: 'اريج العصيمي', position: 'مالية', image: image2, description: 'أريج تدير العمليات المالية بكفاءة.' },
    { name: 'نوره خلف', position: 'مدير حسابات', image: image2, description: 'نوره مسؤولة عن إدارة الحسابات بدقة.' },
    { name: 'لمى العتيبي', position: 'محاسب', image: image2, description: 'لمى تتمتع بخبرة في المحاسبة وتحليل البيانات.' },
    { name: 'ريم الربيعان', position: 'مدير عمليات', image: image2, description: 'ريم تدير العمليات اليومية بكفاءة.' },
    { name: 'منار السبيعي', position: 'مدير مشتريات', image: image2, description: 'منار مسؤولة عن إدارة المشتريات بفعالية.' },
    { name: 'سند الجاسر', position: 'محاسب مبيعات', image: image1, description: 'سند يحلل مبيعات الشركة ويوفر رؤى قيمة.' },
    { name: 'روى القصيمي', position: 'مبيعات', image: image2, description: 'روى تعمل في مجال المبيعات وتحقق أهداف الشركة.' },
    { name: 'غيداء المطيري', position: 'مبيعات', image: image2, description: 'غيداء تتولى مسؤولية المبيعات وتطوير العلاقات مع العملاء.' },
    { name: 'روابي العصيمي', position: 'محاسب مشتريات', image: image2, description: 'روابي تدير عمليات المحاسبة للمشتريات.' },
    { name: 'نوره الدوسري', position: 'محاسب مشتريات', image: image2, description: 'نوره تحافظ على دقة سجلات المشتريات.' },
];

const TeamMembers = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const handleShowModal = (member) => {
        setSelectedMember(member);
    };

    const handleCloseModal = () => {
        setSelectedMember(null);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="team-members">
            <h3 className="team-title">نخبة فريد</h3>
            <div className="cards-container">
                <Slider {...settings}>
                    {teamMembers.map((member, index) => (
                        <div className="member-card" key={index} onClick={() => handleShowModal(member)}>
                            <img src={member.image} alt={member.name} className="member-image" />
                            <h4 className="member-name">{member.name}</h4>
                            <p className="member-position">{member.position}</p>
                        </div>
                    ))}
                </Slider>
            </div>

            {selectedMember && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <img src={selectedMember.image} alt={selectedMember.name} className="modal-image" />
                        <h4 className="modal-name">{selectedMember.name}</h4>
                        <p className="modal-position">{selectedMember.position}</p>
                        <p className="modal-description">{selectedMember.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamMembers;