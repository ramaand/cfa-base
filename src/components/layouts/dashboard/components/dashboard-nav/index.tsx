import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavItem } from '@/types';

import { cn } from '@/libs/utils';

import { Icons } from '@/components/icons';

type TDashboardNav = {
  items: NavItem[];
  isOpen?: boolean;
};

export function DashboardNav({ items, isOpen }: TDashboardNav) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || 'arrowRight'];
        return (
          item.href && (
            <Link key={index} href={item.disabled ? '/' : item.href}>
              <span
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  path === item.href ? 'bg-accent' : 'transparent',
                  item.disabled && 'cursor-not-allowed opacity-80',
                  isOpen && 'justify-center'
                )}
              >
                <Icon className={cn('h-5 w-5', !isOpen && 'mr-2')} />
                <span className={cn(isOpen ? 'hidden' : 'block')}>
                  {item.title}
                </span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
