import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const ApiManagement: AppRouteRecordRaw = {
  path: '/apiManagement',
  name: 'apiManagement',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.api-management',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 1,
  },
  children: [
    {
      path: 'definition',
      name: 'definition',
      component: () => import('@/views/api-management/definition/index.vue'),
      meta: {
        locale: 'menu.api-management.definition',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};
export default ApiManagement;
