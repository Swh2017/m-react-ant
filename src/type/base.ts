
export interface ResponseData<T> {
    code: number;
    data: T;
    message: string;
}

export interface LoginResponse {
    token: string;
    userName: string;
}
