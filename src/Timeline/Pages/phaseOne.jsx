import React, { useEffect } from 'react';
import StoryPost from './StoryPost';
import phaseOne from '../Data/phaseOne';

const PhaseOne = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    return (
        <div>
            {phaseOne.map((post) => (
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

export default PhaseOne;