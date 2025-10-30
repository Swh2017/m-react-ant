import axios, {AxiosRequestConfig} from 'axios';

// 创建axios实例
const request = axios.create({
    baseURL: '', // 基础URL
    timeout: 6 * 1000, // 请求超时时间
});

// 封装GET请求
export const get = <T = any>(url: string, params?: any): Promise<T> => {
    return new Promise((resolve, reject) => {
        request.get(url, {
            params
        }).then((response) => {
            // 直接返回响应数据
            resolve(response.data as T);
        }).catch((error) => {
            reject(error);
        })
    })
};

// 封装POST请求
export const post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return new Promise((resolve, reject) => {
        request.post(url, data, config).then((response) => {
            // 直接返回响应数据
            resolve(response.data as T);
        }).catch((error) => {
            reject(error);
        });
    });
};

export default request;
