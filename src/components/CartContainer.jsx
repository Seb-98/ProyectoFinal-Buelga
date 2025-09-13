import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import ItemCartList from "./ItemCartList";
import SectionButtonsCart from "./SectionButtonsCart";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
    const { cart, totalCart } = useContext(CartContext);

    if (cart.length === 0) {
        return <EmptyCart />;
    }

    return (
        <Container>
            <div className="d-flex flex-wrap justify-content-center gap-3">
                <h4>Total</h4>
                <h4>${totalCart()}</h4>
            </div>
            <ItemCartList dataCartList={cart} />
            <SectionButtonsCart />
        </Container>
    );
}

export default CartContainer;