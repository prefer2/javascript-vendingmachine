import { Coins } from '../domains/VendingMachine';
export declare const createRandomCoins: (amount: number) => Coins;
export declare const sortCoins: (coins: Coins) => Array<[
    string,
    number
]>;
