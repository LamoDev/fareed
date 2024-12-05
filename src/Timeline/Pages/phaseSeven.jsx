import React, { useEffect } from 'react';
import StoryPost from './StoryPost';
import phaseSeven from '../Data/phaseSeven';

const PhaseSeven = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {phaseSeven.map((post) => (
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

export default PhaseSeven;