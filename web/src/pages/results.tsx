import React from 'react';

import ResultsSkeleton from '../components/results-skeleton';
import { defaultSite } from '../config';
import ResultsContainer from '../containers/results-container';

import { useQuery } from '../hooks/use-query';

function ResultsPage() {
  const query = useQuery();
  const q = query.get('q') || '';
  const siteId = query.get('siteId') || defaultSite;

  return (
    <React.Suspense fallback={<ResultsSkeleton />}>
      <ResultsContainer q={q} siteId={siteId} />
    </React.Suspense>
  );
}

export default ResultsPage;
