import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
            <div className="border rounded p-4 m-3 text-center">
                <h3 className="mb-3">No hay productos en el carrito</h3>
                <Link className="btn btn-dark" to="/">
                    Ir al inicio
                </Link>
            </div>
        </div>
    );
}

export default EmptyCart;
