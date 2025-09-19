import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import ItemCartList from "./ItemCartList";
import SectionButtonsCart from "./SectionButtonsCart";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
    const { cart, totalCart, clearCart } = useContext(CartContext);

    if (cart.length === 0) {
        return <EmptyCart />;
    }

    return (
        <Container>
            <div className="d-flex justify-content-center bg-dark text-white mb-3 mx-auto rounded p-1" style={{ width: '200px' }}>
                <h4 className="mb-0">Total ${totalCart}</h4>
            </div>
            <ItemCartList dataCartList={cart} />
            <SectionButtonsCart handleDeleteCart={clearCart} />
        </Container>
    );
}

export default CartContainer;