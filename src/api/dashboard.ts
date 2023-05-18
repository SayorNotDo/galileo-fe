import axios from 'axios';
import type { TableData } from '@arco-design/web-vue/es/table/interface';

export interface ContentDataRecord {
  x: string;
  y: number;
}

export interface BaseDataRecord {
  apiCount: number;
  apiCaseCount: number;
  sceneCount: number;
  cronJobCount: number;
}

export function queryContentData() {
  return axios.get<ContentDataRecord[]>('/v1/api/management/content-data');
}

export function queryBaseData() {
  return axios.get<BaseDataRecord[]>('/v1/api/management/info');
}

export interface PopularRecord {
  key: number;
  clickNumber: string;
  title: string;
  increases: number;
}

export function queryPopularList(params: { type: string }) {
  return axios.get<TableData[]>('/v1/api/popular/list', { params });
}
