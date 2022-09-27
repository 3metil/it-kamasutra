import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.scss'

const Profile = () => {
  return <div className='content'>
    <div><img className='app-wrapper__img' src='https://puzzleit.ru/files/puzzles/131/131368/_original.jpg'></img>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
}

export default Profile;