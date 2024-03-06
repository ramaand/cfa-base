import React, { PropsWithChildren } from 'react';

import Link from 'next/link';

export const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="b-auto overflow-hidden min-h-full">
      {/* Sidebar */}
      {/* Navbar */}
      <nav className="w-full flex justify-center">
        <ul>
          <li className="flex gap-2">
            <Link href="/cms">CMS | </Link>
            <Link href="/cms/user">User | </Link>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        {children}
      </main>
    </div>
  );
};

export const withDashboardLayout = (PageComponent: any) => {
  const WrappedPage = (props: any) => (
    <DashboardLayout>
      <PageComponent {...props} />
    </DashboardLayout>
  );

  return WrappedPage;
};
