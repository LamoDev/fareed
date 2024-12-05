import React, { useEffect } from 'react';
import StoryPost from './StoryPost';
import phaseTwo from '../Data/phaseTwo';

const PhaseTwo = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    return (
        <div>
            {phaseTwo.map((post) => (
                <div key={post.tweetId}>
                    <StoryPost 
                        heading={post.title} 
                        postText={post.description} 
                        tweetId={post.tweetId} 
                        additionalText={post.additionalText} 
                    />
                </div>
            ))}
        </div>
    );
}

export default PhaseTwo;