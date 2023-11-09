import React, { createContext, useContext, useReducer, ReactNode } from 'react';


type CartItem = {
  id: number;
};


type CartState = {
  items: CartItem[];
  searchResults: any;
};


type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: CartItem }
  | { type: 'UPDATE_SEARCH_RESULTS'; payload: any[] };


const CartContext = createContext<{
  cartState: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

const initialCartState: CartState = {
  items: [],
  searchResults: [],
};


const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
      case 'UPDATE_SEARCH_RESULTS':
        return {
          ...state,
          searchResults: action.payload,
        };
    default:
      return state;
  }
};


export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
