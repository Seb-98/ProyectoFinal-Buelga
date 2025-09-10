import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItemCart = (item, cant, selectTalle) => {

        if (validateItemExist(item.id)) {
            const actualizedCart = cart.map((elem) => {
                if (elem.id === item.id) {

                    let actualizedStock = setActualizedStock(elem, selectTalle, cant)

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

    const setActualizedStock = (cartElem, selectedTalle, cant) => {
        const existeTalle = cartElem.selectStock.some(obj => obj.talle === selectedTalle);      //valida si existe talle en el elemtno del cart
        let actualizedStock;

        if (existeTalle) {
            //si existe el talle recorre el selectStock del item card
            actualizedStock = cartElem.selectStock.map((obj) => {
                if (obj.talle === selectedTalle) {              //actualiza cantidad del talle ingresado
                    return { ...obj, quantity: obj.quantity + cant }
                } else {
                    return obj
                }
            });
        }
        else {  //ingresa el talle y cantidad nuevos
            actualizedStock = [...cartElem.selectStock, { talle: selectedTalle, quantity: cant }];
        }

        return actualizedStock;
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

    return (
        <CartContext.Provider value={{ cart, addItemCart, clearCart, deleteItemCart, deleteTalleItemCart, totalCart, resumeCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
