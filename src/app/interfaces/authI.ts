export interface LoginRequestI {
    userName: string;
    password: string
}

export interface LoginResponseI {
    // data: {
    //     user: {
    //         userName: string;
    //         role: string
    //     };
    //     token: string;
    // };
    // status: number;

    data: DataI;
    status: number
}

export interface DataI {
    user: UserI;
    token: string;
}

export interface UserI {
    userName: string;
    role: string
}