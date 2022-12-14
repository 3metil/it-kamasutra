import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

let postData = [
  { id: 1, message: 'Hi, how are you?', likeCount: 12 },
  { id: 2, message: 'It\'s my first post', likeCount: 11 },
  { id: 3, message: 'It\'s my second post', likeCount: 11 },
  { id: 4, message: 'It\'s my third post', likeCount: 11 }

]

let dialogsData = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Angela' },
  { id: 3, name: 'Dwight' },
  { id: 4, name: 'Michel' },
  { id: 5, name: 'Jim' },
  { id: 6, name: 'Pam' }
]

let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Goodbye' },
  { id: 3, message: 'Hello' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Come on' },
  { id: 6, message: 'Oh my' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App postData={postData} messagesData={messagesData} dialogsData={dialogsData} />

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
