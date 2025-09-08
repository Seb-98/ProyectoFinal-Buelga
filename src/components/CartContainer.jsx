import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import ItemCartList from "./ItemCartList";
import SectionButtonsCart from "./SectionButtonsCart";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
    const { cart } = useContext(CartContext);

    if (cart.length === 0) {
        return <EmptyCart/>;
    }

    return (
        <Container>
            <ItemCartList dataCartList={cart} />
            <SectionButtonsCart/>
        </Container>
    );
}

export default CartContainer;