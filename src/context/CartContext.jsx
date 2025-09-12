import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItemCart = (item, selectStock) => {

        if (validateItemExist(item.id)) {
            const actualizedCart = cart.map((elem) =>
                elem.id === item.id ? { ...elem, selectStock: selectStock } : elem
            )

            setCart(actualizedCart)
        } else {
            setCart([...cart, { ...item, selectStock: selectStock }])
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const deleteItemCart = (id) => {
        setCart(cart.filter((elem) => elem.id !== id))
    }

    const deleteTalleItemCart = (id, talle) => {
        const updateCart = cart.map((elem) => { //recorro cart
            if (elem.id === id) {               //si es el mismo id, devuelve el obj y la propiedad selectStock con filtro de talle
                return { ...elem, selectStock: elem.selectStock.filter((elem) => elem.talle !== talle) }
            } else {
                return elem;
            }
        })

        setCart(updateCart)
    }

    const validateItemExist = (id) => {
        return cart.some((elem) => elem.id === id);
    }

    const totalCart = () => {
        let sumaTotal = 0;

        cart.map((elem) => {
            let cantidad = 0;
            cantidad = elem.selectStock.reduce((acumulador, item) => acumulador + item.quantity, 0)
            sumaTotal += elem.oferta ? (elem.precio * cantidad) * elem.porcDesc : elem.precio * cantidad;
        })

        return sumaTotal;
    }

    const resumeCart = () => {
        const resumeCart = cart.map((elem) => {
            const unitPrice = elem.oferta ? elem.precio * elem.porcDesc : elem.precio
            return { id: elem.id, articles: { unitPrice: unitPrice, stock: elem.selectStock } }
        })

        return resumeCart;
    }

    const itemCartStock = (id) => {
        const findItem = cart.find((elem) => elem.id === id)
        return findItem ? findItem.selectStock : [];
    }

    return (
        <CartContext.Provider value={{ cart, addItemCart, clearCart, deleteItemCart, deleteTalleItemCart, totalCart, resumeCart, itemCartStock }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
