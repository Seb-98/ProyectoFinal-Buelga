import { Row, Col, Button, Image } from "react-bootstrap";
import ItemTallesList from "./ItemTallesList";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const ItemCart = ({ data }) => {
    const precioInicial = data.precio;
    const precioFinal = data.oferta ? precioInicial * data.porcDesc : precioInicial;
    const { deleteTalleItemCart } = useContext(CartContext)

    const onDeleteTalle = (talleStock) => {
        deleteTalleItemCart(data.id, talleStock)
    }

    return (
        <Row className="align-items-center mb-3 border rounded p-2 itemCart">
            <Col xs={4} md={4}>
                <Image src={data.img} alt={data.nombre} fluid rounded />
            </Col>
            <Col xs={5} md={5} className="d-flex flex-column justify-content-between">
                <h5>{data.nombre}</h5>
                <p className="mb-1">{data.cantidad}</p>

                <ItemTallesList data={data.selectStock} handleDelete={onDeleteTalle}></ItemTallesList>
            </Col>
            <Col xs={3} md={3} className="d-flex justify-content-center align-items-center flex-column justify-content-between">
                {data.oferta ? (
                    <>
                        <h4 className="text-decoration-line-through m-0">
                            ${precioInicial}
                        </h4>
                        <h3 className="text-danger m-0">${precioFinal}</h3>
                    </>
                ) : (
                    <h4>${precioFinal}</h4>
                )}

                <Button variant="dark" size="xm" className="mt-5">
                    Eliminar
                </Button>
            </Col>
        </Row>
    );
};

export default ItemCart;
