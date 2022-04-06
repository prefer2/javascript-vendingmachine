interface UserInfo {
    email: string;
    name: string;
    password: string;
}
export declare const registerUser: (userInfo: UserInfo) => Promise<any>;
export declare const loginUser: ({ email, password }: {
    email: any;
    password: any;
}) => Promise<any>;
export declare const editUser: (id: string, userInfo: UserInfo) => Promise<void>;
export declare const deleteUser: (id: string) => Promise<void>;
export {};
