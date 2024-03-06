import { ReactElement } from 'react';

import nestLayout from '@/utils/nestLayout';

import { withDashboardLayout } from '@/components/layouts/Dashboard';

import { NextPageWithLayout } from '@/pages/_app';

import { CmsPageLayout } from './';

const UserPage: NextPageWithLayout = () => {
  return <div>Welcome to User Page</div>;
};

export const UserPageLayout = nestLayout(CmsPageLayout, UserPage);

export default withDashboardLayout(UserPage);
