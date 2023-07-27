import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DataManagement: AppRouteRecordRaw = {
  path: '/data-management',
  name: 'data-management',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.data-management',
    requiresAuth: true,
    icon: 'icon-storage',
    order: 5,
  },
  children: [
    {
      path: 'properties',
      name: 'properties',
      component: () => import('@/views/data-management/properties/index.vue'),
      meta: {
        locale: 'menu.data-management.properties',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DataManagement;
