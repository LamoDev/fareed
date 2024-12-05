import React, { useState } from 'react';
import MyTweetComponent from '../../Tweet/MyTweetComponent';
import './StoryPost.css';

const StoryPost = ({ heading, postText, tweetId, imageUrl, additionalText }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div className="story-post-container special-background">
            <h1 className="story-post-title">{heading}</h1>
            <p className="story-post-text">
                {isExpanded ? postText : `${postText.length > 100 ? `${postText.substring(0, 100)}...` : postText}`}
            </p>
            {isExpanded && imageUrl && (
                <img 
                    src={imageUrl} 
                    alt="Story" 
                    className="story-post-image" 
                    loading="lazy" 
                />
            )}
            {isExpanded && tweetId && (
                <div className="tweet-container">
                    <MyTweetComponent tweetId={tweetId} />
                </div>
            )}
            {isExpanded && additionalText && (
                <p className="story-post-text">{additionalText}</p>
            )}
            <button 
                className="cta-button" 
                onClick={handleToggle}
                aria-expanded={isExpanded} 
                aria-label={isExpanded ? 'Show less' : 'Read more'}
            >
                {isExpanded ? 'أظهر أقل' : 'اقرأ المزيد'}
            </button>
        </div>
    );
};

export default StoryPost;