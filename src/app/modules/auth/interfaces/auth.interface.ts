export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginResponse {
    name: string;
    email: string;
    token: string;
}