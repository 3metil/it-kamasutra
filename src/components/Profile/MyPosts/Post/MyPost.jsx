import React from 'react';
import './MyPost.scss'

const MyPost = (props) => {
  return (



    <div>
      <img className='post__img' src='https://rare-gallery.com/uploads/posts/4560707-women-model-face-green-eyes-portrait.jpg'></img>
      {props.message}
      <div>
    <span>Like(s) {props.likes}</span>
    </div>
    </div>
  )
}

export default MyPost;