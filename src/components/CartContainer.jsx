import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import ItemCartList from "./ItemCartList";

const CartContainer = () => {
    const { cart } = useContext(CartContext);

    if (cart.length === 0) {
        return <Container>No hay productos en el carrito</Container>;
    }

    return (
        <Container>
            <ItemCartList dataCartList={cart} />
        </Container>
    );
}

export default CartContainer;