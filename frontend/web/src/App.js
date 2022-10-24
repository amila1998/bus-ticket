import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/Header';
import './App.css';
import MainPages from './components/MainPages';

function App() {
  return (
    <div className="App">
      <Router>
          <div><Header /></div>
          <div>
            <MainPages />

          </div>
          <div> </div>
        </Router>
    </div>
  );
}

export default App;
