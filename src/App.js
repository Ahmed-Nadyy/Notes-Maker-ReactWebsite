import React, { children } from 'react';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LoginLayout from './component/Layouts/LoginLayout';
import SystemLayout from './component/Layouts/SystemLayout';
import RegisterLayout from './component/Layouts/RegisterLayout';


function App() {
  const routes = createBrowserRouter([
    { path: '/' ,element : <SystemLayout />},
    { path: '*' ,element : <SystemLayout />},
    {path: 'login', element : <LoginLayout />},
    {path: 'register', element : <RegisterLayout />},
    
  
  
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
