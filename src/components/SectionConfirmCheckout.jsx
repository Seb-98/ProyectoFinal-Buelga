import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const SectionConfirmCheckout = ({ summary, onDelete }) => {

    return (
        <div className="border rounded p-2 mt-2" style={{ maxHeight: "500px" }}>
            <div className="bg-secondary text-white rounded p-2 mb-3">
                <p className="m-0">Al realizar la compra nos comunicaremos para organizar detalles del envio.
                    Enviaremos un mensaje de <span className="fw-bold">Whatsapp</span> al numero ingresado, en caso de no haber una respuesta en un lapso de 48hs,
                    intentaremos seguir la comunicacion via <span className="fw-bold">Email.</span>
                </p>
            </div>
            <div className="d-flex flex-column align-items-stretch p-3 my-3 border rounded">
                <h3 className="text-center mb-3">Resumen de Compra</h3>

                <div className="d-flex justify-content-between">
                    <span>Envío</span>
                    <span>${summary.shippingPrice}</span>
                </div>

                <div className="d-flex justify-content-between mt-1">
                    <span>Impuestos</span>
                    <span>${summary.taxesPrice}</span>
                </div>

                <div className="d-flex justify-content-between mt-1">
                    <span>Total</span>
                    <span>${summary.total}</span>
                </div>

                <div className="d-flex justify-content-between fw-bold mt-3">
                    <span>Total a pagar</span>
                    <span>${summary.totalPay}</span>
                </div>
            </div>

            <div className="d-flex justify-content-between gap-2 px-2">
                <Link to="/cart" className="btn btn-primary">Volver</Link>
                <Link to="/" className="btn btn-delete" onClick={onDelete}>Eliminar</Link>
                <Button variant={"dark"} type="submit">Confirmar</Button>
            </div>
        </div>
    )
}

export default SectionConfirmCheckout;