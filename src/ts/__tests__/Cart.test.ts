import Cart from '../service/Cart';
import Buyable from '../domain/Buyable';

describe('Cart', () => {
  let cart: Cart;
  let item: Buyable;

  beforeEach(() => {
    cart = new Cart();
    item = { id: 1, name: 'item1', price: 100 };
  });

  test('Shoud add itemn in cart correct', () => {
    cart.add(item);
    expect(cart.items).toContain(item);
  });

  test('shoud delete an item in cart correct', () => {
    cart.add(item);
    cart.removeById(1);
    expect(cart.items).not.toContain(item);
  });

  test('shoud calculate total correct', () => {
    cart.add(item);
    cart.add(item);
    expect(cart.calculateTotal()).toBe(200);
  });

  test('shoud calculate discount correct', () => {
    cart.add(item);
    cart.add(item);
    expect(cart.calculateDiscountedTotal(0.5)).toBe(100);
  });
});
