export interface Item {
    name: string;
    price: number;
    quantity: number;
}
export interface Coins {
    500: number;
    100: number;
    50: number;
    10: number;
}
export interface VendingMachineState {
    items: Item[];
    coins: Coins;
    purchaseMoney: number;
}
declare class VendingMachine {
    state: VendingMachineState;
    constructor(initialItems: Item[], initialCoins: Coins, initialMoney: number);
    useStore(callback: Function): any;
    addItem(item: Item): void;
    updateItem(name: string, updatedItem: Item): void;
    removeItem(name: string): void;
    findItem(name: string): Item | null;
    addCoin(amount: number): void;
    getTotalMoney(): number;
    addPurchaseMoney(money: number): void;
    buyItem(nameId: string): void;
    returnChange(): Coins;
}
export declare const vendingMachine: VendingMachine;
export {};
