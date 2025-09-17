import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const SectionButtonsCart = ({ handleDeleteCart }) => {

    const deleteCart = () => {
        Swal.fire({
            title: "Seguro desea vaciar el carrito?",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteCart();
            }
        });
    }

    return (
        <div className="d-flex flex-wrap justify-content-center gap-5 mt-2">
            <Button className="btn-delete" size="xm" onClick={deleteCart}>Vaciar carrito</Button>
            <Link to="/checkout" className="btn btn-dark">Continuar Compra</Link>
        </div>
    );
}

export default SectionButtonsCart;