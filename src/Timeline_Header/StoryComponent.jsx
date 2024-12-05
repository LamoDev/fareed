import React from 'react';
import './StoryComponent.css'; // Adjust the path as needed
import image from "../Photos/bg.jpg"; // Adjust the path as needed

const StoryComponent = () => {
    return (
        <div className="story-container">
            <div className="image-wrapper">
                <img src={image} alt="Background" className="background-image" />
                <div className="text-overlay">
                    <h3 className="title-text">قصَّتُنا</h3>
                    <p className="description-text">
                        رحلة فريد: حين امتزجت السريالية بالمحاسبة، وُلِد فريد؛ قصة تروي كيف صنع فريق من المبدعين عالماً مختلفاً، حيث تتحول التحديات إلى فرص، وتصبح الأفكار جسراً نحو التميز والإلهام.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StoryComponent;