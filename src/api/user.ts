import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}

export interface LogoutRes {}
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
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}
