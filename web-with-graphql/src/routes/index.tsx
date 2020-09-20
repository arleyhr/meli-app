import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../pages';
import ResultsPage from '../pages/results';
import ItemDetailPage from '../pages/item-detail';
import Header from '../containers/header-container';

/**
 * App routes
 */
function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/items">
          <ResultsPage />
        </Route>
        <Route exact path="/items/:id">
          <ItemDetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export { AppRouter };
