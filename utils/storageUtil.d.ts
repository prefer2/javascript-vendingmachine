import { Response } from '../domains/GlobalStore';
export declare const setData: (key: string, data: object) => void;
export declare const getData: (key: string) => any;
export declare const getCookie: (name: string) => Response | undefined;
export declare const setCookie: (name: string, value: string) => void;
export declare const deleteCookie: (name: string) => void;
