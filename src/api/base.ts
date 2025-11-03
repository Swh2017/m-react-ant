import {get, post} from "@/utils/request";

// 登录函数，使用post方法匹配mock配置
export function login(data: any){
    return post('/user/login', data);
}

// 原有的userLogin函数
export function userLogin(){
    return get('/api/login')
}