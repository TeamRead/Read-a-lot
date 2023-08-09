import React from 'react';
import App from './App';
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: '/favorites',
        element: <Favorites/>
    }
    ])
root.render(
  <React.StrictMode>
      <App />
      <RouterProvider router={router}/>
  </React.StrictMode>
);


