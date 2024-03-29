export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  nickname?: string;
  avatar?: string;
  chineseName?: string;
  email?: string;
  phone?: string;
  department?: string;
  location?: string;
  role: RoleType;
}
