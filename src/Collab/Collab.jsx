import React from 'react';
import { Link } from 'react-router-dom';
import './Collab.css';
import image from "../Photos/bg2.jpg";

const Collab = () => {
    return (
        <div className="collab-container">
            <div className="collab-image-wrapper">
                <img src={image} alt="Background" className="collab-background-image" />
                <div className="collab-text-overlay">
                    <h3 className="collab-title">مبادراتنا وتعاوناتنا</h3>
                    <p className="collab-description">
                        عد النجاح الذي حققة فريق فريد بفضل وعون من الله، و ايمانًا منا بضرورة مد يد العون للغير ومشاركة النجاح مع الغير.
                        <br />
                        أطلقنا حملة تعاقدات مع شركات المعسكر الإفتراضية 
                    </p>
                    <Link to="/coming-soon" className="collab-read-more-button">
                        اقرا المزيد
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Collab;