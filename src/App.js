import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import {ProvideAuth} from "./context/authContext"

import Page from './components/Page';

const App = () => {
  return (
    <ProvideAuth>
      <div>
        <BrowserRouter>
          
          {/* <Page /> */}
          <Auth />
        </BrowserRouter>
      </div>
    </ProvideAuth>
  );
}

export default App;
