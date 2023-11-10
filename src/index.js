import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Auth/login/Login';
import Signup from './Auth/signup/Signup';
import Home from './Pages/Home/Home';
import Addpitch from './Pages/Addpitch/Addpitch';
import Addartist from './Pages/Addartist/Addartist';
import Settings from './Pages/Settings/Settings';
import Payment from './Pages/Payment/Payment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
   {
    path: "/signup",
    element: <Signup/>
  },
  {
   path: "/dashboard",
   element: <App/>,
   children: [
    {
      path: "",
      element: <Home/>
    },
    {
      path: "addpitch",
      element: <Addpitch/>
    },
    {
      path: "addartist",
      element: <Addartist/>
    },,
    {
      path: "settings",
      element: <Settings/>
    },,
    {
      path: "payment",
      element: <Payment/>
    },]
 },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
