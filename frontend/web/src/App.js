import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <div><Header /></div>
          <div className='main'>
            

          </div>
          <div>
          <Footer/>  
          </div>
        </Router>
    </div>
  );
}

export default App;
