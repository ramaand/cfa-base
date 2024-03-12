import React, { useState } from 'react';
import { PropsWithChildren } from 'react';

import useDisclosure from '@/hooks/useDisclosure';

import { cn } from '@/libs/utils';

import Footer from './components/footer';
import Header from './components/header';
import Sidebar from './components/sidebar';

export const DashboardLayout = ({ children }: PropsWithChildren) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Sidebar isOpen={isOpen} />
      <div
        className={cn(
          'min-h-screen relative mt-0 transition-all duration-500 ease-in-out md:ml-64 ml-0 mr-0',
          isOpen ? 'ml-0 mr-0 md:ml-20 md:mr-0' : 'ml-0 mr-0 md:ml-64'
        )}
      >
        <Header isOpen={isOpen} onToggle={onToggle} />

        <main className="pt-14 pb-20 lg:pb-16">{children}</main>

        <Footer />
      </div>
    </>
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
