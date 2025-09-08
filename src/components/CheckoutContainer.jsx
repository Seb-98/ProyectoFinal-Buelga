import { useState } from "react";
import { Button, Form, Row, Container, Col } from "react-bootstrap";

const CheckoutContainer = () => {
    //HACER
    //aclarar input obligatrios
    //optimizar codigo en funcoines en archivo js
    //insert datos de clientes
    //insert datos ventas
    //componente para detalles de carrito y de precio con boton confirmar

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

    const getDataClient = (e) => {
        setClientData({
            ...clientData,
            [e.target.name]: e.target.value
        })
    }

    const sendDataClient = (e) => {
        e.preventDefault()
        if (validateEmptyField(clientData)) {
        } else {
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
        <Container>
            <Row>
                <Col lg={4} md={4}>
                    <Form className="d-flex flex-wrap">
                        <Form.Label className="mb-0">Nombre</Form.Label>
                        <Form.Control className={`form-control mb-3 ${!validateField.Nombre && 'border border-danger'}`} placeholder="Nombre" aria-label="Nombre" name="Nombre" type="text" onChange={getDataClient}></Form.Control>
                        
                        <Form.Label className="mb-0">Apellido</Form.Label>
                        <Form.Control className={`form-control mb-3 ${!validateField.Apellido && 'border border-danger'}`} placeholder="Apellido" name="Apellido" type="text" onChange={getDataClient}></Form.Control>
                        
                        <Form.Label className="mb-0">Telefono</Form.Label>
                        <Form.Control className={`form-control mb-3 ${!validateField.Telefono && 'border border-danger'}`} placeholder="Telefono" name="Telefono" type="text" onChange={getDataClient}></Form.Control>
                        
                        <Form.Label className="mb-0">Email</Form.Label>
                        <Form.Control className={`form-control mb-3 ${!validateField.Email && 'border border-danger'}`} placeholder="Email" name="Email" type="text" onChange={getDataClient}></Form.Control>
                        
                        <Form.Label className="mb-0">Direccion</Form.Label>
                        <Form.Control className={`form-control mb-3 ${!validateField.Direccion && 'border border-danger'}`} placeholder="Direccion" name="Direccion" type="text" onChange={getDataClient}></Form.Control>
                        <Button variant={"dark"} type="submit" className="mt-3" onClick={(e) => sendDataClient(e)}>Confirmar Compra</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CheckoutContainer;