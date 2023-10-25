import React from 'react'
import ReactDOM from 'react-dom/client'                                                      
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Applied from './components/Applied/Applied';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import Errorpage from './components/ErrorPage/Errorpage';
import JobDetails from './components/JobDetails/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: "/applied",
        element: <Applied></Applied>,
        loader: () => fetch('/jobs.json') //warning: only load the data you need.Do not load all the data
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json') //Do not load all data. load only what you need
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
