import React from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Button from './component/button';
import Login from './component/Login';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <div className='text'>
            <Button type="delete" className="delete" />
            <Button type="play" className="play" />
            <Button type="setting" className="setting" />
            <Button type="home" className="home" />
            <Button type="upload" className="upload" />
            <Button type="icon" className="icon" />
            <Button type="download" className="download" />
            <Button type="search" className="search" />
          </div>
        )
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
