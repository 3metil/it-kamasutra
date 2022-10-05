import React from 'react';
import './MyPosts.scss'
import MyPost from './Post/MyPost';

const MyPosts = (props) => {
  
  
  let postData = [
    { id: 1, message: 'Hi, how are you?', likeCount: 12 },
    { id: 2, message: 'It\'s my first post', likeCount: 11 }

]

  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <MyPost message={postData[0].message} likes={postData[0].likeCount}/>
      <MyPost message={postData[1].message} likes={postData[1].likeCount}/>
    </div>
  )
}

export default MyPosts;