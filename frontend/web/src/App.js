import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/Header';
import './App.css';
import MainPages from './components/MainPages';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div><Header /></div>

        <div className='main'>

          <MainPages />

        </div>

        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
