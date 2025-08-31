import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItemCart = (item, cant, selectTalle) => {

        if (validateItemExist(item.id)) {
            const actualizedCart = cart.map((elem) => {
                if (elem.id === item.id) {

                    const existeTalle = elem.selectStock.some(obj => obj.talle === selectTalle);

                    let actualizedStock;

                    if (existeTalle) {
                        actualizedStock = elem.selectStock.map((obj) => {
                            if (obj.talle === selectTalle) {
                                return { ...obj, quantity: obj.quantity + cant }
                            } else {
                                return obj
                            }
                        });
                    } else {
                        actualizedStock = [...elem.selectStock, { talle: selectTalle, quantity: cant }];
                    }

                    return { ...elem, selectStock: actualizedStock };

                } else {
                    return elem
                }
            })

            setCart(actualizedCart)
        } else {
            setCart([...cart, { ...item, selectStock: [{ talle: selectTalle, quantity: cant }] }])
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const deleteItemCart = (id) => {
        cart.filter((elem) => elem.id !== id);
    }

    const validateItemExist = (id) => {
        return cart.some((elem) => elem.id === id);
    }

    return (
        <CartContext.Provider value={{ cart, addItemCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
