import React, { useEffect } from 'react';
import StoryPost from './StoryPost';
import phaseEight from '../Data/phaseNine';

const PhaseNine = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {phaseEight.map((post) => (
                <div key={post.tweetId}>
                    <StoryPost 
                        heading={post.title} 
                        postText={post.description} 
                        tweetId={post.tweetId} 
                        imageUrl={post.imagePath} 
                        additionalText={post.additionalText} 
                    />
                </div>
            ))}
        </div>
    );
}

export default PhaseNine;