import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from '../pages/List';
import Repo from '../pages/Repo';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={List} />
    <Route path="/repository" component={Repo} />
  </Switch>
);
export default Routes;
