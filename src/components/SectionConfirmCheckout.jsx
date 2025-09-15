const SectionConfirmCheckout = ({ total }) => {

    return (
        <div className="border rounded p-2" style={{ maxHeight: "500px" }}>
            <div className="bg-secondary text-white rounded p-2 mb-3">
                <p className="m-0">Al realizar la compra nos comunicaremos para organizar detalles del envio.
                    Enviaremos un mensaje de <span className="fw-bold">Whatsapp</span> al numero ingresado, en caso de no haber una respuesta en un lapso de 48hs,
                    intentaremos seguir la comunicacion via <span className="fw-bold">Email.</span>
                </p>
            </div>
            <div className="d-flex flex-column align-items-stretch p-3 border rounded">
                <h3 className="text-center mb-3">Detalles del Precio</h3>

                <div className="d-flex justify-content-between">
                    <span>Envío</span>
                    <span>$</span>
                </div>

                <div className="d-flex justify-content-between">
                    <span>Impuestos</span>
                    <span>$0</span>
                </div>

                <div className="d-flex justify-content-between">
                    <span>Total</span>
                    <span>$0</span>
                </div>

                <div className="d-flex justify-content-between fw-bold">
                    <span>Total a pagar</span>
                    <span>$0</span>
                </div>
            </div>

        </div>
    )
}

export default SectionConfirmCheckout;