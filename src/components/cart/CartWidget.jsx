import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectCartCount } from "../../redux/cart/cartSelectors";

const CartWidget = () => {
    const cartCount = useSelector(selectCartCount);

    return (
        <div>
            <Link to="/cart">
                <FaShoppingCart className="iconCard" data-testid="cart-icon"/>
            </Link>
            <Badge pill bg="primary">{cartCount}</Badge>
        </div>
    )
}

export default CartWidget;