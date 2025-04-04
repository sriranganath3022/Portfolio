
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills.js';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <AboutMe/>
        <Education/>
        <Projects/>
        <Experience/>
        <Certifications/>
        <Skills/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;