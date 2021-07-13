import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loginpageoption from './components/registration/Loginoption';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          {<Switch>
            <Route exact path='/' component={Loginpageoption} />

            <Route component={Error} />
          </Switch>}
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
