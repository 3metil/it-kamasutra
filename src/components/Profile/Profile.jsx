import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import './Profile.scss'

const Profile = () => {
  return <div className='content'>
    <ProfileInfo />
    <MyPosts />
  </div>
}

export default Profile;