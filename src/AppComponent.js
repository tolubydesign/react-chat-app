import React from 'react';
// import logo from '../logo.svg';
// import home_svg from '../assets/feather/home.svg'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/main'
import Settings from './components/settings'
import Notfound from './components/notfound'
import Navigation from './components/navigation';

export default function AppComponent() {
  return (
    <div id='app'>
      <Router>
        <div className='main-chat-app--navigation'>
          <Navigation />
        </div>
        <div className='main-chat-app--components'>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/settings/" component={Settings} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
