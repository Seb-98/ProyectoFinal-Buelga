import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <FaShoppingCart style={{ color: 'white', width: '25px', height: '25px', marginRight: '5px' }} />
            <Badge pill bg="primary">{cart.length}</Badge>
        </div>
    )
}

export default CartWidget;