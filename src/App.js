import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bulma/css/bulma.min.css';

// importing components
import {Navbar} from './components/Navbar';
import { MainBodyWrapper } from './components/MainBodyWrapper';
import { About } from './About';
import { ContactUs } from './ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={props => (
            <MainBodyWrapper />
          )} />
          <Route exact path='/about' render={props => (
            <About />
          )} />
          <Route exact path='/contact' render={props => (
            <ContactUs />
          )} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
