import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const TestAnalysis: AppRouteRecordRaw = {
  path: '/test-analysis',
  name: 'test-analysis',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.test-analysis',
    requiresAuth: true,
    icon: 'icon-bar-chart',
    order: 4,
  },
  children: [
    {
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/test-analysis/dashboard/index.vue'),
      meta: {
        locale: 'menu.test-analysis.dashboard',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'analysis',
      name: 'analysis',
      component: () => import('@/views/test-analysis/analysis/index.vue'),
      meta: {
        locale: 'menu.test-analysis.analysis',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default TestAnalysis;
