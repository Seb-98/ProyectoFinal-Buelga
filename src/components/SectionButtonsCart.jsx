import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const SectionButtonsCart = () => {

    const {clearCart} = useContext(CartContext)

    const deleteCart = () => {
        clearCart();
    }

    return (
        <div className="d-flex flex-wrap justify-content-center gap-5 mt-2">
            <Button className="btn-delete" size="xm" onClick={deleteCart}>Eliminar Productos</Button>
            <Link to="/checkout" className="btn btn-dark">Continuar Compra</Link>
        </div>
    );
}

export default SectionButtonsCart;