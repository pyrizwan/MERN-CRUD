import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link, Switch } from 'react-router';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

import Nav from './components/Navbar';


ReactDOM.render(
 
  <Router>
  <div>
    <Nav />
    <Switch>
    <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
     
    </Switch>
  </div>
</Router>,
  document.getElementById('root')
);
registerServiceWorker();
