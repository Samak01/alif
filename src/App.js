import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddPosts from "./components/AddPosts";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Posts from "./components/Posts";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/add" element={<AddPosts />}/>
          <Route path="/contact" element={<Contacts />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
