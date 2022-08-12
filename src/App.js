import React from "react";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Articles from "./components/Articles";
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Articles></Articles>
    <Contact></Contact>
    </>
  );
}

export default App;
