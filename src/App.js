import React, { Component } from 'react';
import './App.scss';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';


const App = (props) => {
  

  
  return (

    <div className='content'>


      <BrowserRouter>



        <div className='app-wrapper'>
          <Header />
          <Navbar />
          <AppRouter postData = {props.postData} dialogsData = {props.dialogsData} messagesData = {props.messagesData} />
        </div>


      </BrowserRouter>
    </div>


  );
}

export default App;

