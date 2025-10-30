// 登录状态管理
export interface UserInfo {
  token: string;
  username: string;
}

// 检查是否已登录
export const isLoggedIn = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token;
};

// 获取用户信息
export const getUserInfo = (): UserInfo | null => {
  const userStr = localStorage.getItem('userInfo');
  return userStr ? JSON.parse(userStr) : null;
};

// 设置用户信息
export const setUserInfo = (userInfo: UserInfo): void => {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  localStorage.setItem('token', userInfo.token);
};

// 获取token
export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

// 登出
export const logout = (): void => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('token');
};