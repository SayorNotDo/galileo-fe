import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const ApiTest: AppRouteRecordRaw = {
  path: '/apiManagement',
  name: 'apiManagement',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.api-test',
    requiresAuth: true,
    icon: 'icon-command',
    order: 1,
  },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/views/api-test/dashboard/index.vue'),
      meta: {
        locale: 'menu.api-test.index',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'definition',
      name: 'definition',
      component: () => import('@/views/api-test/definition/index.vue'),
      meta: {
        locale: 'menu.api-test.definition',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};
export default ApiTest;
