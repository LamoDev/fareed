import React from 'react';
import { Tweet } from 'react-tweet';
import "./MyTweetComponent.css";

const MyTweetComponent = ({ tweetId }) => {
  return (
    <div data-theme="light" className='tweet'> 
      <Tweet id={tweetId} />
    </div>
  );
};

export default MyTweetComponent;