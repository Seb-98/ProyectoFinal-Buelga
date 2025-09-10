import { useState, useContext } from "react";
import { Button, Form, Row, Container, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { endCheckout, validateClient } from "../service/checkoutService";

const CheckoutContainer = () => {
    const [clientData, setClientData] = useState({
        Nombre: "",
        Apellido: "",
        Telefono: "",
        Email: "",
        Direccion: "",
    });

    const [validateField, setValidateFields] = useState({
        Nombre: true,
        Apellido: true,
        Telefono: true,
        Email: true,
        Direccion: true,
    })

    const [idTransaction, setIdTransaction] = useState(null)
    const { resumeCart, totalCart, clearCart } = useContext(CartContext)

    const getDataClient = (e) => {
        setClientData({
            ...clientData,
            [e.target.name]: e.target.value
        })
    }

    const sendDataClient = async (e) => {
        e.preventDefault();

        if (validateEmptyField(clientData)) {
            e.preventDefault();

            const resultValidateClient = await validateClient(clientData);

            if (resultValidateClient == null) {
                alert("Hubo un problema al validar el cliente");
                return;
            }

            const validateEndCheckout = await endCheckout(resumeCart(), totalCart(), resultValidateClient.id)

            if (validateEndCheckout == null) {
                alert("Hubo un problema en el checkout");
                return;
            } else {
                setIdTransaction(validateEndCheckout.id)
                clearCart();
                alert("Exito en la compra")
            }
        }
    }

    const validateEmptyField = (data) => {
        let validate = true;
        const newValidateFields = {};   //const para actualizar datos de una

        Object.entries(data).forEach(([key, value]) => {
            if (value.trim() === "") {
                newValidateFields[key] = false;
                validate = false;
            } else {
                newValidateFields[key] = true;
            }
        });

        setValidateFields(newValidateFields);
        return validate;
    };

    return (
        <>
            {idTransaction ?
                // hacer componente
                <div>Compra realizada con exito! {idTransaction}</div>
                :
                <Container>
                    <Row>
                        <Col lg={4} md={4}>
                            <Form className="d-flex flex-wrap" onSubmit={(e) => sendDataClient(e)}>
                                <Form.Label className="mb-0 fw-bold">Nombre</Form.Label> <span className="text-danger">*</span>
                                <Form.Control className={`form-control mb-3 ${!validateField.Nombre && 'border border-danger'}`} placeholder="Nombre" aria-label="Nombre" name="Nombre" type="text" onChange={getDataClient}></Form.Control>

                                <Form.Label className="mb-0 fw-bold">Apellido</Form.Label> <span className="text-danger">*</span>
                                <Form.Control className={`form-control mb-3 ${!validateField.Apellido && 'border border-danger'}`} placeholder="Apellido" name="Apellido" type="text" onChange={getDataClient}></Form.Control>

                                <Form.Label className="mb-0 fw-bold">Telefono</Form.Label> <span className="text-danger">*</span>
                                <Form.Control className={`form-control mb-3 ${!validateField.Telefono && 'border border-danger'}`} placeholder="Telefono" name="Telefono" type="text" onChange={getDataClient}></Form.Control>

                                <Form.Label className="mb-0 fw-bold">Email</Form.Label> <span className="text-danger">*</span>
                                <Form.Control className={`form-control mb-3 ${!validateField.Email && 'border border-danger'}`} placeholder="Email" name="Email" type="text" onChange={getDataClient}></Form.Control>

                                <Form.Label className="mb-0 fw-bold">Direccion</Form.Label> <span className="text-danger">*</span>
                                <Form.Control className={`form-control mb-3 ${!validateField.Direccion && 'border border-danger'}`} placeholder="Direccion" name="Direccion" type="text" onChange={getDataClient}></Form.Control>

                                <Button variant={"dark"} type="submit" className="mt-3">Confirmar Compra</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default CheckoutContainer;