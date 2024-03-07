import { PropsWithChildren } from 'react';

import Header from '@/components/layouts/header';
import Sidebar from '@/components/layouts/sidebar';

export const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-16 p-4">{children}</main>
      </div>
    </>
  );
};
