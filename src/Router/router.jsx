import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div className='text-5xl btn btn-primary'>Hello world!</div>,
    },
  ]);

export default router;