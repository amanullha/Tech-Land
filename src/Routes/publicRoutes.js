import React from 'react';
import ForgetPassword from '../Pages/ForgetPassword';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';


export const publicRoutes = [

    { path: '/', name: 'Home', Component: Home },
    { path: '/login', name: 'Login', Component: Login },
    { path: '/signup', name: 'SignUp', Component: SignUp },
    { path: '/forget-password', name: 'ForgetPassword', Component: ForgetPassword },
    // { path:'/news-feed', name:'News Feed',Component:NewsFeed}



]