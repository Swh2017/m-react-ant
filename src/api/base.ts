import {get,post} from "@/utils/request";

// 登录函数，使用正确的路径匹配mock
export function login(data: any){
    return post('/user/login', data);
}

// 获取用户路由
export function getUserRouter(){
    return get('/user/router')
}
