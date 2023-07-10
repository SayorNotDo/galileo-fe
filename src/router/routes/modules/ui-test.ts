import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const UiManagement: AppRouteRecordRaw = {
  path: '/uiManagement',
  name: 'uiManagement',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.ui-test',
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
        locale: 'menu.ui-test.repository',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};
export default UiManagement;
