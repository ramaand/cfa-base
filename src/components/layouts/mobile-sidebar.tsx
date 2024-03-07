'use client';

import { useState } from 'react';

import { MenuIcon } from 'lucide-react';

import { navItems } from '@/mocks/nav';

import { DashboardNav } from '@/components/layouts/dashboard-nav';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

type TSidebar = React.ComponentProps<'div'>;

export function MobileSidebar({ className }: TSidebar) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Overview
              </h2>
              <div className="space-y-1">
                <DashboardNav items={navItems} setOpen={setOpen} />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
