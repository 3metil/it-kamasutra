import React from 'react';
import './MyPosts.scss'
import MyPost from './Post/MyPost';

const MyPosts = (props) => {


  let postData = [
    { id: 1, message: 'Hi, how are you?', likeCount: 12 },
    { id: 2, message: 'It\'s my first post', likeCount: 11 },
    { id: 3, message: 'It\'s my second post', likeCount: 11 },
    { id: 4, message: 'It\'s my third post', likeCount: 11 }

  ]

  let postsElements = postData.map(p => <MyPost message={p.message} likes={p.likeCount} />)

  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      
      { postsElements }
      

    </div>
  )
}

export default MyPosts;