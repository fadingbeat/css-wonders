import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Homepage from "../src/pages/Homepage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Homepage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
