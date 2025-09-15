import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SectionButtonsCart = ({ handleDeleteCart }) => {

    const deleteCart = () => {
        handleDeleteCart();
    }

    return (
        <div className="d-flex flex-wrap justify-content-center gap-5 mt-2">
            <Button className="btn-delete" size="xm" onClick={deleteCart}>Eliminar Productos</Button>
            <Link to="/checkout" className="btn btn-dark">Continuar Compra</Link>
        </div>
    );
}

export default SectionButtonsCart;