import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';

// importing components
import {Navbar} from './components/Navbar';
import { MainBodyWrapper } from './components/MainBodyWrapper';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainBodyWrapper />
    </div>
  );
}

export default App;
