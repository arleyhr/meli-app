import React from 'react';
import ResultsContainer from '../containers/results-container';

import { useQuery } from '../hooks/use-query';

function ResultsPage() {
  const query = useQuery();
  const q = query.get('q') || '';
  const siteId = query.get('siteId') || undefined;

  return (
    <React.Suspense fallback={<h5>loading</h5>}>
      <ResultsContainer q={q} siteId={siteId} />
    </React.Suspense>
  );
}

export default ResultsPage;
