import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loginpageoption from './components/registration/Loginoption';
import Indentform from './components/dashboard/Indentform';
import Newindent from './components/dashboard/Newindent';
import AvailableItems from './components/dashboard/AvailableItems';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          {<Switch>
            <Route exact path='/' component={Loginpageoption} />
            <Route exact path='/Indentform' component={Indentform} />
            <Route exact path='/Availableitems' component={AvailableItems} />
            <Route exact path='/Newindent' component={Newindent} />

            <Route component={Error} />
          </Switch>}
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
