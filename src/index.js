import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './redux/Store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    
    <Provider store={Store}>
    <App />
    
    </Provider>

    <Toaster/>
    
  </BrowserRouter>

  

   

);


