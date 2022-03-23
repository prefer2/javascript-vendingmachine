import ItemService from './ItemService';
import CoinService from './CoinService';
import { ItemInfo } from './Item';

export default class VendingMachine {
  itemService: ItemService;

  coinService: CoinService;

  constructor() {
    this.itemService = new ItemService([]);
    this.coinService = new CoinService({
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    });
  }

  addItem(newItem: ItemInfo): void {}

  updateItem(name: string): void {}

  deleteItem(name: string): void {}

  addMoney(amount: number): void {}

  getTotalMoney(): number {
    return undefined;
  }
}