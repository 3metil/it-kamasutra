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
      <MyPost message='Hi, how are you?' likes='15'/>
      <MyPost message="It's my first post" likes='20' />

    </div>
  )
}

export default MyPosts;