import React from "react";
import {createHashRouter, Navigate} from "react-router-dom";
import Home from "../view/home";
const Login = React.lazy(() => import("../view/login"));
const Error = React.lazy(() => import("../view/error"));
// const Settings = React.lazy(() => import("../view/settings"));


const Router = createHashRouter([
  {
    path: '',
    element: <Navigate to='/home' />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: '*',
    element: <Error />,
  }
]);

export default Router
