import React from "react";
import {createHashRouter, Navigate} from "react-router-dom";
import Home from "../view/home";
import Layout from '../view/layout';
const Login = React.lazy(() => import("../view/login"));
const Error = React.lazy(() => import("../view/error"));

const Router = createHashRouter([
    {
        path: '',
        element: <Navigate  to='/dashboard' />,
    },
    {
        path: 'home',
        element: <Home />,
    },
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: '*',
        Component: Layout,
        errorElement: <Error />
    }])

export default Router
