import { PropsWithChildren, ReactElement, useEffect } from 'react';

import {
  DashboardLayout,
  withDashboardLayout,
} from '@/components/layouts/Dashboard';

const CmsPage = () => {
  return (
    <div>
      <h1>Welcome to CMS Page</h1>
    </div>
  );
};

export const CmsPageLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default withDashboardLayout(CmsPage);
