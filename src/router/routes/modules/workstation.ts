import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const WorkStation: AppRouteRecordRaw = {
  path: '/workstation',
  name: 'workstation',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.workstation',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/workstation/workplace/index.vue'),
      meta: {
        locale: 'menu.workstation.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default WorkStation;
