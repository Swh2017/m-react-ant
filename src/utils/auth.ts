// @ts-ignore
import Cookies from 'js-cookie'

const userToken = 'UserTokens'

// 检查是否已登录
export const isLoggedIn = (): boolean => {
  const token = Cookies.get(userToken, '')
  return !!token;
};


// 设置用户信息
export const setToken = (userToken: string): void => {
  Cookies.set(userToken, userToken, '')
};

// 获取token
export const getToken = (): string | null => {
  const token = Cookies.get(userToken, '')
  return token || '';
};

// 登出
export const logout = (): void => {
  Cookies.remove(userToken, '')
};
