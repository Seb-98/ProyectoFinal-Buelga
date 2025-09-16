import { useState, useContext } from "react";
import { Form, Row, Container, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { endCheckout, validateClient } from "../service/checkoutService";
import SectionCartCheckout from "./SectionCartCheckout";
import SectionConfirmCheckout from "./SectionConfirmCheckout";
import InputsCheckout from "./InputsCheckout";
import { useForm } from "react-hook-form"

const CheckoutContainer = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()

    const [idTransaction, setIdTransaction] = useState(null)
    const { cart, resumeCart, clearCart, cartSummary } = useContext(CartContext)

    // console.log(cart)

    const startCheckout = async (data) => {

        const resultValidateClient = await validateClient(data);

        if (resultValidateClient == null) {
            alert("Hubo un problema al validar el cliente");
            return;
        }

        const validateEndCheckout = await endCheckout(resumeCart(), cartSummary.totalPay, resultValidateClient.id)

        if (validateEndCheckout == null) {
            alert("Hubo un problema en el checkout");
            return;
        } else {
            setIdTransaction(validateEndCheckout.id)
            clearCart();
            alert("Exito en la compra")
        }
    }

    return (
        <>
            {idTransaction ?
                // hacer componente
                <div>Compra realizada con exito! {idTransaction}</div>
                :
                <Container>
                    <Form className="d-flex flex-wrap" onSubmit={handleSubmit(startCheckout)}>
                        <Row>
                            <Col lg={4} md={4}>
                                <SectionCartCheckout dataCart={cart} />
                            </Col>
                            <Col lg={4} md={4}>
                                <InputsCheckout registerForm={register} errorsForm={errors}/>
                            </Col>
                            <Col lg={4} md={4}>
                                <SectionConfirmCheckout summary={cartSummary} onDelete={clearCart} />
                            </Col>
                        </Row>
                    </Form>
                </Container>
            }
        </>
    )
}

export default CheckoutContainer;