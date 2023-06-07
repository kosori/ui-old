import type { z } from 'zod';

import type { navItemSchema } from '~/schemas';

export type NavItem = z.infer<typeof navItemSchema>;
export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}
export type SidebarNavItem = NavItemWithChildren;
