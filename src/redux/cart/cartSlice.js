import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemCart: (state, action) => {

            const { item, selectStock } = action.payload;

            const existingItem = state.items.find((elem) => elem.id === item.id);

            if (existingItem) {
                existingItem.selectStock = selectStock;
            } else {
                state.items.push({ ...item, selectStock });
            }
        },
        deleteItemCart: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(elem => elem.id !== id);
        },
        deleteCart: (state) =>{
            state.items = [];
        }
    }
});

export const {
    addItemCart,
    deleteItemCart,
    deleteCart
} = cartSlice.actions;

export default cartSlice.reducer;
