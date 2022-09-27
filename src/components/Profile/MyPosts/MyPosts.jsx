import React from 'react';
import './MyPosts.scss'
import MyPost from './Post/MyPost';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <MyPost />
      <MyPost />
      <MyPost />
      <MyPost />
      <MyPost />
      <MyPost />
    </div>
  )
}

export default MyPosts;