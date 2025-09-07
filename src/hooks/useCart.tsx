import { createContext, useContext, useState, ReactNode } from 'react';
import { Item } from '@/data/items';

interface CartItem extends Item {
  days: number;
  startDate?: Date;
  endDate?: Date;
  weeklyDiscount?: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Item, days?: number, startDate?: Date, endDate?: Date) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const calculateWeeklyDiscount = (price: number, days: number) => {
    if (days >= 7) {
      const weeks = Math.floor(days / 7);
      const remainingDays = days % 7;
      const weeklyPrice = price * 6.5; // 7.5% discount for weekly rentals
      return weeks * weeklyPrice + remainingDays * price;
    }
    return days * price;
  };

  const addToCart = (item: Item, days: number = 1, startDate?: Date, endDate?: Date) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      // Update existing item
      setCartItems(cartItems.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, days, startDate, endDate }
          : cartItem
      ));
    } else {
      // Add new item
      setCartItems([...cartItems, { ...item, days, startDate, endDate }]);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + calculateWeeklyDiscount(item.price, item.days);
    }, 0);
  };

  const getItemCount = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalPrice,
      getItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};