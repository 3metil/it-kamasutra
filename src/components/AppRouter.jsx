import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/dialogs'} element={<Dialogs />}/>
            <Route path={'/profile'} element={<Profile />}/>
            <Route path={'*'} element={<Dialogs />}/>
        </Routes>
    );
};

export default AppRouter;
