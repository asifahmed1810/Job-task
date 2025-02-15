import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayOut from '../Layout/MainLayOut';
import Allusers from '../pages/Allusers';
import Allproducts from '../pages/Allproducts';
import UserDetails from '../pages/UserDetails';
import AddProducts from '../pages/AddProducts';

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
        },
        {
          path:`userdetails/:id`,
          element:<UserDetails></UserDetails>,
          
        },
        {
          path:'add-product',
          element:<AddProducts></AddProducts>
        }
      ]
    },
  ]);

export default router;