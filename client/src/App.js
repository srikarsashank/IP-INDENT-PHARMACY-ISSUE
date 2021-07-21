import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loginpageoption from './components/registration/Loginoption';
import Indentform from './components/dashboard/Indentform';
import Indentpharma from './components/dashboard/Indentpharma';
import Issuedindentsmain from './components/dashboard/Issuedindentsmain';
import Issuedindents_ws from './components/dashboard/Issuedindents_ws';
import Raisedindents_ws from './components/dashboard/Raisedindents_ws';
import Availabledrugs from './components/dashboard/Availabledrugs';
import About from './components/dashboard/About';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          {<Switch>
            <Route exact path='/' component={Loginpageoption} />
            <Route exact path='/Indentform' component={Indentform} />
            <Route exact path='/Availabledrugs' component={Availabledrugs} />
            <Route exact path='/Newindent' component={Indentpharma} />
            <Route exact path='/Issuedindent' component={Issuedindentsmain} />
            <Route exact path='/Issuedindentws' component={Issuedindents_ws} />
            <Route exact path='/Raisedindents' component={Raisedindents_ws} />
            <Route exact path='/About' component={About} />

            <Route component={Error} />
          </Switch>}
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
