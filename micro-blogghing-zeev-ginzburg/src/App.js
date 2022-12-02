import './App.css';
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { sort } from 'fast-sort';
import UserProfile from './components/pages/user-profile';
import HomePage from './components/pages/home-page';

function App() {

const router = createBrowserRouter([
  {
    path: "/userprofile",
    element: <UserProfile />
  },
  {
    path: "/",
    element: <HomePage />
  },
]);
  

  return (
    <div className="App">
          <RouterProvider router={router} />
      </div>
  );
}

export default App;