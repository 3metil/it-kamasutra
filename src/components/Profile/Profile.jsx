import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import './Profile.scss'

const Profile = (props) => {



  return <div className='content'>
    <ProfileInfo />
    <MyPosts postData={props.postData} />
  </div>
}



export default Profile;