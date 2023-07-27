import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const UiTest: AppRouteRecordRaw = {
  path: '/ui-test',
  name: 'ui-test',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.ui-test',
    requiresAuth: true,
    icon: 'icon-sun-fill',
    order: 2,
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
export default UiTest;
