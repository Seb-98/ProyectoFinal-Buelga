import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    // console.log(cart);
    return (
        <div>
            <NavLink to="/cart">
                <FaShoppingCart style={{ color: 'white', width: '25px', height: '25px', marginRight: '5px' }} />
            </NavLink>
            <Badge pill bg="primary">{cart.length}</Badge>
        </div>
    )
}

export default CartWidget;