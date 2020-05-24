import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "./stylesheets/main.css";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Football from './components/Test';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Navigation /> */}
      {/* <Header /> */}
      <Home />
      <About />
      <Resume />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <Football /> */}
    </div>
  );
}

export default App;
