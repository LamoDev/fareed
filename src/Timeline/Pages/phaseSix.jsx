import React, { useEffect } from 'react';
import StoryPost from './StoryPost';
import phaseSix from '../Data/phaseSix';

const PhaseSix = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {phaseSix.map((post) => (
                <div key={post.postId}>
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

export default PhaseSix;