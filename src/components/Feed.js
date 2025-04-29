import React from 'react';
import CreatePost from './CreatePost.js';
import Tweet from './Tweet.js';
import { useSelector } from "react-redux";
import useGetMyTweets from "../hooks/useGetMyTweets.js"

const Feed = () => {
  const { tweets } = useSelector((store) => store.tweet);
  const { user } = useSelector((store) => store.user);
  console.log(tweets);
  useGetMyTweets(user?._id);// call the hooks with logged-in user id
  return (
    <div className='w-[50%] border border-gray-200'>
      <div>
        <CreatePost />
        {
          tweets?.map((tweet) => <Tweet key={tweet?._id} tweet={tweet} />)
        }
      </div>
    </div>
  );
};

export default Feed;