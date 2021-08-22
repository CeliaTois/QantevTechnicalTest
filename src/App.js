import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './pages/Banner';
import Details from './pages/Details';
import Home from './pages/Home';

const App = () => {

  return (
    <div>
      <Banner />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" exact component={Details} /> 
        </Switch>
      </Router>
    </div>
  );
};

export default App;
