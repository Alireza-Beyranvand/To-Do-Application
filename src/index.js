import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import router from './routers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

