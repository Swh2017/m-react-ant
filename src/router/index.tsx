import React from "react";
import {createHashRouter, Navigate} from "react-router-dom";
import Home from "../view/home";
import ProtectedRoute from '../components/ProtectedRoute';
const Login = React.lazy(() => import("../view/login"));
const Error = React.lazy(() => import("../view/error"));
const Dashboard = React.lazy(() => import("../view/dashboard"));
const Settings = React.lazy(() => import("../view/settings"));

// 动态路由配置
const dynamicRoutes = [
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: 'settings',
    element: <Settings />,
  }
];

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
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    // 子路由 - 需要登录才能访问
    children: dynamicRoutes.map(route => ({
      ...route,
      element: (
        <ProtectedRoute>
          {route.element}
        </ProtectedRoute>
      )
    }))
  },
  {
    path: '*',
    element: <Error />,
  }
]);

export default Router
