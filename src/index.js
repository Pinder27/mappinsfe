import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import './app.css'
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/register",
    element:<Signup/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


