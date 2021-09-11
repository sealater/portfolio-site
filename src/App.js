// App.js
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';
import Sidebar from './components/Sidebar.js'
import PageContent from './components/PageContent.js'
import Portfolio from './components/Portfolio.js'
import Resume from './components/Resume.js'

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar>
          <Link to="/" className="sidebar__button">Portfolio</Link>
          <Link to="/resume" className="sidebar__button">Resume</Link>
          <Link to="/contactme" className="sidebar__button">Contact Me</Link>
        </Sidebar>
        <PageContent Title="Portfolio">
          <Switch>
            <Route exact path="/">
              <Portfolio />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/contactme">

            </Route>
          </Switch>
        </PageContent>
      </div>
    </Router>
  );
}

export default App;