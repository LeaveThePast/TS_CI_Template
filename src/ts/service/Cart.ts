import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  removeById(itemId: number): void {
    this._items = this._items.filter(item => item.id !== itemId);
  }

  calculateTotal(): number {
    return this._items.reduce((total, item) => total + item.price, 0);
  }

  calculateDiscountedTotal(discount: number = 0): number {
    return this._items.reduce((total, item) => total + item.price * (1 - discount), 0);
  }

  get items(): Buyable[] {
    return [...this._items];
  }
}
