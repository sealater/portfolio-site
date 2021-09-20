// App.js
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
import Contact from './components/Contact.js'

import ReactGA from 'react-ga';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar>
          <Link to="/" className="sidebar__button" onClick={e => ReactGA.pageview('/')}>Portfolio</Link>
          <Link to="/resume" className="sidebar__button" onClick={e => ReactGA.pageview('/resume')}>Resume</Link>
          <Link to="/contactme" className="sidebar__button" onClick={e => ReactGA.pageview('/contactme')}>Contact Me</Link>
        </Sidebar>
        <Switch>
          <Route exact path="/">
            <PageContent Title="Portfolio">
              <Portfolio />
            </PageContent>
          </Route>
          <Route exact path="/resume">
            <PageContent Title="Resume">
              <Resume SmallDevice={window.matchMedia("(max-width: 1060px)").matches} VerySmallDevice={window.matchMedia("(max-width: 684px)").matches} />
            </PageContent>
          </Route>
          <Route exact path="/contactme">
            <PageContent Title="Contact Me">
              <Contact />
            </PageContent>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;