import React from 'react';
//   component
import Header from "./components/Header"
import Footer from "./components/Footer"

// pages
import Home from "./pages/Home"
import RoomDetails from "./pages/RoomDetails"
import Restaurant from './pages/Restaurant';
import Spa from './pages/Spa.js';
// import Room from './components/Room';
//   router

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Room from './components/Room';
import Rooms from './components/Rooms';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/restaurant",
    element: <Restaurant/>
  },
  {
    path: "/rooms",
    element: <Rooms/>
  },
  {
    path: "/spa",
    element: <Spa/>
  },
  {
    path: "/room/:id",
    element: <RoomDetails/>
  }
])

const App = () => {
  return <div>
    <Header/>
    <RouterProvider router={router}/>
    <Footer/>
  </div>;
};

export default App;
