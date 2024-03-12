import Link from 'next/link';

import { cn } from '@/libs/utils';

import { navItems } from '@/mocks/nav';

import { DashboardNav } from '../dashboard-nav';

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <nav
      className={cn(
        `fixed transition-all duration-500 ease-in-out h-screen z-40 bg-gray-100/40 dark:bg-gray-800/40 border-r overflow-hidden`,
        isOpen ? 'w-64 ml-0 md:w-20 sidebar-small' : 'w-64 -ml-64 md:ml-0'
      )}
    >
      <div className="flex h-14 items-center px-6">
        <div className="flex w-full justify-center">
          <Link className="flex items-center gap-1 text-lg" href="#">
            {isOpen ? (
              <span className="font-bold">D</span>
            ) : (
              <>
                <span className="font-bold">Digihub</span>
                <span>CMS</span>
              </>
            )}
          </Link>
        </div>
      </div>
      <div className="space-y-4 py-4 border-t">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {/* <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Overview
            </h2> */}
            <DashboardNav items={navItems} isOpen={isOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
}
