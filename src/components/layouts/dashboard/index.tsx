import React from 'react';

import { DashboardLayout } from './components/dashboard.layout';

export const withDashboardLayout = (PageComponent: any) => {
  const WrappedPage = (props: any) => (
    <DashboardLayout>
      <PageComponent {...props} />
    </DashboardLayout>
  );

  return WrappedPage;
};
