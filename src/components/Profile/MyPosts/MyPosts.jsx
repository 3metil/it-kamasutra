import React from 'react';
import './MyPosts.scss'
import MyPost from './Post/MyPost';

const MyPosts = (props) => {




  let postsElements = props.postData.map(p => <MyPost message={p.message} likes={p.likeCount} />)

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