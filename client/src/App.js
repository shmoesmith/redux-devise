import React, { Component } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Bio from './components/Bio';
import { Switch, Route } from 'react-router-dom';
import Auth from 'j-toker';

class App extends Component {
  componentDidMount() {
    Auth.configure({ apiUrl: '/api' });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/bio' component={Bio} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
