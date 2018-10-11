import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";

class App extends React.Component {
  state = {
    todos: [],
    };

  infoFromAbout = (edits) => {
    todos: edits
  }
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <p> </p>
          <Link to="/about">About</Link>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <about calling={this.infoFromAbout}/>
        </div>
      </Router>
      // <div>

      // </div>
    );
  }
}

export default App;
