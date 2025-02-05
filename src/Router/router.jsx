import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayOut from '../Layout/MainLayOut';
import Allusers from '../pages/Allusers';
import Allproducts from '../pages/Allproducts';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
          path:'/',
          element:<Allusers></Allusers>
        },
        {
          path:'products',
          element:<Allproducts></Allproducts>
        }
      ]
    },
  ]);

export default router;