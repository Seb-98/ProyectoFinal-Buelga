import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cartCount } = useContext(CartContext);

    return (
        <div>
            <Link to="/cart">
                <FaShoppingCart className="iconCard" />
            </Link>
            <Badge pill bg="primary">{cartCount}</Badge>
        </div>
    )
}

export default CartWidget;