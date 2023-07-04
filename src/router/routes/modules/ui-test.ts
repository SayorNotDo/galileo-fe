import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const ApiManagement: AppRouteRecordRaw = {
  path: '/uiManagement',
  name: 'uiManagement',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.ui-management',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 1,
  },
  children: [
    {
      path: 'element-management',
      name: 'element-management',
      component: () => import('@/views/ui-test/element-management/index.vue'),
      meta: {
        locale: 'menu.ui-management.repository',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};
export default ApiManagement;
