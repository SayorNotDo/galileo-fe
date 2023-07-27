import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/test-track',
  name: 'test-track',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.test-track',
    requiresAuth: true,
    icon: 'icon-computer',
    order: 3,
  },
  children: [
    {
      path: 'Debug',
      name: 'Debug',
      component: () => import('@/views/test-track/debug/index.vue'),
      meta: {
        locale: 'menu.test-track.debug',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'Task',
      name: 'Task',
      component: () => import('@/views/test-track/task/index.vue'),
      meta: {
        locale: 'menu.test-track.task',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DASHBOARD;
