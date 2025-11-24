import { createSelector } from '@reduxjs/toolkit';

export const selectCartItems = state => state.cart.items;

export const selectItemStock = createSelector(
    [selectCartItems, (_, id) => id],
    (cart, id) => {
        const item = cart.find(i => i.id === id);
        return item ? item.selectStock : [];
    }
);

export const selectCartCount = createSelector(
    [selectCartItems],
    cart => cart.flatMap(i => i.selectStock).reduce((acc, s) => acc + s.quantity, 0)
);

export const selectCart = createSelector(
    [selectCartItems],
    (items) => items
);

export const selectTotalCart = createSelector(
    [selectCartItems],
    (items) =>
        items.reduce((total, elem) => {
            const quantity = elem.selectStock.reduce((acc, s) => acc + s.quantity, 0);
            const price = elem.onSale ? elem.price * elem.discPerc : elem.price;
            return total + price * quantity;
        }, 0)
);
