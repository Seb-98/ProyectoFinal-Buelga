import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {

    const iconStyles = {
        color: 'white',
        width: '25px',
        height: '25px',
        marginRight: '5px'
    }

    return (
        <>
            <FaShoppingCart style={iconStyles} />
            <Badge pill bg="primary">
                5
            </Badge>
        </>
    )
}

export default CartWidget;