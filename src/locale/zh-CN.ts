import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';

import localeWorkplace from '@/views/workstation/workplace/locale/zh-CN';

import localeApiDefinition from '@/views/api-test/definition/locale/zh-CN';

import localApiDashboard from '@/views/api-test/dashboard/locale/zh-CN';

import localeUiManagement from '@/views/ui-test/element-management/locale/zh-CN';

import localeSettings from './zh-CN/settings';

import localeTestTrackDebug from '@/views/test-track/debug/locale/zh-CN';

import localeTestTrackTask from '@/views/test-track/task/locale/zh-CN';

import localeTestAnalysisDashboard from '@/views/test-analysis/dashboard/locale/zh-CN';

import localeDataManagementProperties from '@/views/data-management/properties/locale/zh-CN';

import localeDataManagementMetadata from '@/views/data-management/metadata/locale/zh-CN';

import localeTestAnalysisAnalysis from '@/views/test-analysis/analysis/locale/zh-CN';

import localeUserInfo from '@/views/user/info/locale/zh-CN';

import localeUserSetting from '@/views/user/setting/locale/zh-CN';

export default {
  'menu.workstation': '工作台',
  'menu.server.dashboard': '测试管理-服务端',
  'menu.test-track': '测试管理',
  'menu.test-analysis': '测试分析',
  'menu.data-management': '数据管理',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  'common.search': '请输入搜索',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,
  ...localApiDashboard,
  ...localeApiDefinition,
  ...localeUiManagement,
  ...localeTestTrackDebug,
  ...localeTestTrackTask,
  ...localeTestAnalysisDashboard,
  ...localeDataManagementProperties,
  ...localeTestAnalysisAnalysis,
  ...localeDataManagementMetadata,
  ...localeUserInfo,
  ...localeUserSetting,
};
