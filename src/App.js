import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup"
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Signup/>
      <Footer/>
    </div>
  );
}

export default App;
