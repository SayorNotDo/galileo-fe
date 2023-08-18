import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';
import {
  ProjectRecord,
  LoginData,
  UserInfo,
  LoginRes,
  LogoutRes,
} from '@/types/user';

export function login(data: LoginData) {
  return axios.post<LoginRes>('v1/api/user/login', data);
}

export function logout() {
  return axios.post<LogoutRes>('v1/api/user/logout', {});
}

export function getUserInfo() {
  return axios.get<UserState>('v1/api/user/info');
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('v1/api/user/menu');
}

export function getUserList() {
  return axios.get<UserInfo[]>('v1/api/user/list');
}

export function queryUserProjectList() {
  return axios.get('v1/api/user/project/list');
}

export function queryLatestActivity() {
  return axios.get('v1/api/user/latest-activity');
}

export function queryUserGroupList() {
  return axios.get('v1/api/user/group/list');
}
