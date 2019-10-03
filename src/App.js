import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import Nav from './components/Nav'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'peter',
      password: ''
    }
  }
  render() {
    return <div>
      <Router >
        <Nav />
         <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  }

}