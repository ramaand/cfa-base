import React, { ReactElement } from 'react';

import { Observable } from 'rxjs';

import { useObservable } from '@/hooks/useObservable';

import { withDashboardLayout } from '@/components/layouts/dashboard';

const CmsPage = () => {
  const { data, error, loading, refetch } = useObservable({
    source: new Observable(),
    initialState: {},
    depedencies: [],
  });
  return <div>Dashboard</div>;
};

export default withDashboardLayout(CmsPage);
