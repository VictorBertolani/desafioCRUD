import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import path from 'path';

import Main from './routes/main'
import CadastrarUsuario from './routes/CadastrarUsuario'




const router = createBrowserRouter([{

  element: <App />,
  children: [
{
  path: "/", 
  element: <Main />,
},
{
  path: "/CadastrarUsuarios",
  element: <CadastrarUsuario />,
},




  ],

},]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>
);



