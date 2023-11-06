import { MenuItem } from "@/lib/definitions";
import { create } from "zustand";

interface CartItem extends MenuItem {
  count: number;
}

type CartStore = {
  cart: CartItem[],
  count: () => number;
  add: (menuItem: MenuItem) => void;
  remove: (idMenuItem: string) => void;
  removeAll: () => void;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  count: () => {
    const { cart } = get();
    if (cart.length)
      return cart.map(item => item.count).reduce((prev, curr) => prev + curr);
    return 0;
  },
  add: (menuItem: MenuItem) => {
    const { cart } = get();
    const updatedCart = updateCart(menuItem, cart);
    set({ cart: updatedCart });
    const newTotalPrice = get().totalPrice;
    set({ totalPrice: newTotalPrice });
  },
  remove: (idMenuItem: string) => {
    const { cart } = get();
    const updatedCart = removeCart(idMenuItem, cart);
    set({ cart: updatedCart });
  },
  removeAll: () => set({ cart: [] }),
  totalPrice: () => {
    const { cart } = get();
    if (cart.length) {
      const totalPrice = cart.reduce((total, pizzaItem) => {
        const itemPrice = Number(pizzaItem.price) * pizzaItem.count;
        return total + itemPrice;
      }, 0);
      return totalPrice;
    }
    return 0;
  }
}));

function updateCart(menuItem: MenuItem, cart: CartItem[]): CartItem[] {
  const cartItem = { ...menuItem, count: 1 } as CartItem;

  const menuItemOnCart = cart.map(item => item.id).includes(menuItem.id);
  if (!menuItemOnCart) cart.push(cartItem)
  else {
    return cart.map(item => {
      if (item.id === menuItem.id)
        return { ...item, count: item.count + 1 } as CartItem;
      return item
    })
  }
  return cart;
}

function removeCart(idMenuItem: string, cart: CartItem[]): CartItem[] {
  return cart.map(item => {
    if (item.id === idMenuItem)
      return { ...item, count: item.count - 1 }
    return item;
  }).filter(item => {
    return item.count;
  });
}
