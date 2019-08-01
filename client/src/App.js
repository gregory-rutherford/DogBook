import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Components/Nav/Navbar";
import Footer from "./Components/Nav/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Post from "./Pages/Post/Post";
import SeenPost from "./Pages/Post/SeenPost";
import Wrapper from "./Components/Wrapper/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/postLost" component={Post} />
          <Route exact path="/postSeen" component={SeenPost} />
          </Wrapper>
        <br />
         
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
