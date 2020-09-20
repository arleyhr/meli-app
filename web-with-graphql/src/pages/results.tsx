import React from 'react';

import { defaultSite } from '../config';
import ResultsContainer from '../containers/results-container';

import { useParamsQuery } from '../hooks/use-params-query';

function ResultsPage() {
  const query = useParamsQuery();
  const q = query.get('q') || '';
  const siteId = query.get('siteId') || defaultSite;

  return <ResultsContainer q={q} siteId={siteId} />;
}

export default ResultsPage;
