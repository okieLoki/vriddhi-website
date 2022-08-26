import React from "react";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Articles from "./components/Articles";
import Contact from './components/Contact'
import Graphs from './components/Graphs'
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Graphs></Graphs>
    <Testimonials></Testimonials>
    <Articles></Articles>
    <Contact></Contact>
    </>
  );
}

export default App;
