import { NavLink } from 'react-router-dom';

const SuccessCheckout = ({idTransaction}) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
            <div className="border rounded p-4 m-3 text-center">
                <h3>Compra realizada con exito! </h3>
                <h4>ID de compra: {idTransaction}</h4>
                <NavLink className="btn btn-dark mt-2" to="/">
                    Ir al inicio
                </NavLink>
            </div>
        </div>
    );
}

export default SuccessCheckout;
