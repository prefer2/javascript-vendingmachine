export interface UserData {
    email: string;
    id: string;
    name: string;
}
interface LoginState {
    isLoggedIn: boolean;
    userData: UserData;
}
export interface Response {
    accessToken: string;
    user: UserData;
}
interface GlobalStoreInterface {
    loginState: LoginState;
    currentLocation: string;
}
export default class GlobalStore {
    state: GlobalStoreInterface;
    constructor(initialLoginState: LoginState, initialLocation: string);
    useStore(callback: any): any;
    changeLocation(location: string): void;
    login(response: Response): void;
    logout(): void;
}
export declare const globalStore: GlobalStore;
export {};
