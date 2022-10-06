import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';



const AppRouter = (props) => {
    return (
        <Routes>
            <Route path={'/dialogs'} element={ <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />}/>
            <Route path={'/profile'} element={ <Profile postData={props.postData} />}/>
            <Route path={'*'} element={ <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />}/>
        </Routes>
    );
};

export default AppRouter;
