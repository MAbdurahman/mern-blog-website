import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotificationsProvider from './assets/context/notificationContext.jsx';
import './index.css';
import App from './app/App.jsx';

createRoot(document.getElementById('root')).render(
   <NotificationsProvider>
      <BrowserRouter>
         <App/>
      </BrowserRouter>
   </NotificationsProvider>
)