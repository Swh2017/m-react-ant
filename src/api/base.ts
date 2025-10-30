import {get} from "@/utils/request";


export function login(params: any) {
    return get('/user/login', params)
}


