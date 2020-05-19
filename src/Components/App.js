import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Board from "./Board";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <span class="navbar-brand mb-0 h1">Kanban Board</span>
        </nav>
        <BrowserRouter>
          <Route path="/" exact component={Board} />
          <Route path="/board" exact component={Board} />
        </BrowserRouter>
      </div>
    );
  }
}
