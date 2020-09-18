import React from 'react';
import { HookRouter } from 'hookrouter';

import HomePage from '../pages';
import ResultsPage from '../pages/results';
import ItemDetailPage from '../pages/item-detail';

/**
 * App routes
 */
const routes: HookRouter.RouteObject = {
  '/': () => <HomePage />,
  '/results': () => <ResultsPage />,
  '/detail/:id': ({ id }) => <ItemDetailPage id={id} />,
};

export { routes };
