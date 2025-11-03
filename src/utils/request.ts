import axios, {AxiosRequestConfig} from 'axios';

// 创建axios实例
const request = axios.create({
    baseURL: '', // 基础URL
    timeout: 6 * 1000, // 请求超时时间
});

// 封装GET请求
export const get = <T = any>(url: string, params?: any): Promise<T> => {
    console.log('发送GET请求:', url, '参数:', params);
    return new Promise((resolve, reject) => {
        request.get(url, {
            params
        }).then((response) => {
            // 直接返回响应数据
            resolve(response.data as T);
        }).catch((error) => {
            console.error('GET请求错误:', error);
            reject(error);
        })
    })
};

// 封装POST请求
export const post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    console.log('发送POST请求:', url, '数据:', data);
    return new Promise((resolve, reject) => {
        request.post(url, data, config).then((response) => {
            console.log('POST响应:', response.data);
            // 直接返回响应数据
            resolve(response.data as T);
        }).catch((error) => {
            console.error('POST请求错误:', error);
            reject(error);
        });
    });
};

export default request;
