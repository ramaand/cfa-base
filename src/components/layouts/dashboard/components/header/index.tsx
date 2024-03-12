import { useState } from 'react';

import Link from 'next/link';

import { MenuIcon } from 'lucide-react';

import { cn } from '@/libs/utils';

import SidebarSwitch from '@/components/ui/sidebar-switch';

import { MobileSidebar } from '../mobile-sidebar';
import { UserNav } from '../user-nav';

export default function Header({
  onToggle,
  isOpen,
}: {
  onToggle: () => void;
  isOpen: boolean;
}) {
  return (
    <nav
      className={cn(
        'z-20 fixed mt-0 transition-all duration-500 ease-in-out md:left-64 left-0 right-0 border-b',
        isOpen
          ? 'left-0 right-0 md:left-20 md:right-0'
          : 'left-0 right-0 md:left-64'
      )}
    >
      <div className="h-14 py-4 md:py-0 flex flex-row flex-nowrap items-center justify-between bg-white dark:bg-slate-900 shadow-lg shadow-cyan-100/10 dark:shadow-cyan-700/10 px-6">
        <div className="hidden lg:block">
          {/* <MenuIcon /> */}
          <SidebarSwitch isOpen={isOpen} onToggle={onToggle} />
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </nav>
  );
}
