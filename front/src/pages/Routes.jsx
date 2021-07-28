import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Pokedex from './Pokedex';

const route = (path, Component) => <Route exact path={path} component={Component} />;

function Routes() {
  return (
    <Switch>
      {route('/', Home)}
      {route('/pokedex', Pokedex)}
    </Switch>
  );
}

export default Routes;
