import React from 'react';
import {BrowserRouter as Router, Switch, NavLink, Route} from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/">Search</NavLink>
          <NavLink to="/saved">Saved</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
