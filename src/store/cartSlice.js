import { createSlice } from '@reduxjs/toolkit';

const cartFromStorage = localStorage.getItem('cart');
const initialState = {
  items: cartFromStorage ? JSON.parse(cartFromStorage) : []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1, unitPrice: item.price });
      }
    },
    removeItem(state, action) {
       const id = action.payload;
       const existingItem = state.items.find(item => item.id === id);

       if (!existingItem) return;

       if (existingItem.quantity > 1) {
           existingItem.quantity -= 1;
           return;
        }

      state.items = state.items.filter(item => item.id !== id);
    },
    clearCart(state) {
      state.items = [];
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;