import React, { ReactElement } from 'react';

import { Observable } from 'rxjs';

import { useObservable } from '@/hooks/useObservable';

import { withDashboardLayout } from '@/components/layouts/dashboard';

const HomePage = () => {
  const { data, error, loading, refetch } = useObservable({
    source: new Observable(),
    initialState: {},
    depedencies: [],
  });
  return <div>Home Page</div>;
};

export default withDashboardLayout(HomePage);
