// src/routes/routes.js

import Home from '../pages/Home';
import About from '../pages/About';
import contactUs from '../pages/contactUs';

import login from "../pages/login";

import signup from "../pages/signup";
import Donation from '../pages/Donation';
import Events from '../pages/Events'
import Volunteering from '../pages/Volunteering';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/signup',
        component: signup
    },
    {

        path: '/About',
        component: About,
    },
   
    {
        path: '/contactUs',
        component: contactUs,
    },
    {
        path: '/Events',
        component: Events,
    },
    {
        path: '/Donation',
        component: Donation,
    },
    {
        path: 'Events/Volunteering',
        component: Volunteering,
    }

  
    
];

export default routes;