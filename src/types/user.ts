export interface ProjectRecord {
  id: number;
  name: string;
  description?: string;
  headCount: number;
  involveMembers: {
    id: number;
    chineseName: string;
    nickname: string;
    email: string;
    avatar?: string;
  }[];
}

export interface UserInfo {
  id: number;
  username: string;
  nickname?: string;
  email: string;
  chineseName?: string;
  status: boolean;
  role: number;
  createdAt: number;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}

export interface LogoutRes {}

export interface LatestActivity {
  id: number;
  title: string;
  description: string;
  avatar: string;
}

export interface GroupRecord {
  id: number;
  avatar: string;
  name: string;
  peopleNumber: number;
}
