import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItemCart = (item, cant) => {

        if (validateItemExist(item.id)) {
            const actualizedCart = cart.map((elem) => {
                if (elem.id === item.id) {
                    return { ...elem, quantity: cant }
                } else {
                    return elem
                }
            })

            setCart(actualizedCart)
        } else {
            setCart([...cart, { ...item, quantity: cant }])
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
