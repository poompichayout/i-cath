import { IconifyIcon } from '@iconify/react';

import { ReactNode } from 'react';

import Iconify from 'src/components/Iconify';

const getIcon = (name: string | IconifyIcon) => <Iconify icon={name} width={22} height={22} />;

export type NavConfigProps = {
  title: string,
  path: string;
  icon: ReturnType<typeof getIcon>
  info?: string;
  children?: NavConfigProps[];
}

const navConfig: NavConfigProps[] = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
