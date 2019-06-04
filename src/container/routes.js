import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// import component
import history from 'utils/history';
import RootContainer from 'container/rootContainer';
import { List, Create } from 'container/flight';

const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/create" component={Create} />
        </Switch>
      </RootContainer>
    </Router>
  );
};

export default AppRouter;
