import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import router from './routers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

