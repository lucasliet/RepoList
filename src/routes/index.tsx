import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from '../pages/List';
import Repo from '../pages/Repo';

import rootpath from '../config/GetRoothPath';

const Routes: React.FC = () => (
  <Switch>
    <Route path={rootpath} exact component={List} />
    <Route path={`${rootpath}repository/:repository+`} component={Repo} />
  </Switch>
);
export default Routes;
