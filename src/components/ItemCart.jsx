import { Row, Col, Button, Image } from "react-bootstrap";
import ItemTallesList from "./ItemTallesList";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useState } from "react";

const ItemCart = ({ data }) => {
    const [boxShadow, setBoxShadow] = useState('');
    const cantidad = data.selectStock.reduce((acumulador, elem) => acumulador + elem.quantity, 0);
    const precioInicial = data.precio * cantidad;
    const precioFinal = data.oferta ? precioInicial * data.porcDesc : precioInicial;
    const { deleteTalleItemCart, deleteItemCart } = useContext(CartContext)

    const onDeleteTalle = (talleStock) => {
        deleteTalleItemCart(data.id, talleStock)
    }

    const onDelete = (id) => {
        deleteItemCart(id);
    }

    const handleHover = () => {
        setBoxShadow('0 8px 20px rgba(0, 0, 0, 0.55)');
    }

    const handleLeave = () => {
        setBoxShadow('');
    };

    return (
        <Row className="align-items-center mb-3 mx-0 px-3 border rounded p-2 itemCart"
            style={{
                boxShadow: boxShadow,
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
        >
            <Col xs={4} md={4}>
                <Image src={data.img} alt={data.nombre} fluid rounded />
            </Col>
            <Col xs={5} md={5} className="d-flex flex-column justify-content-between">
                <h5>{data.nombre}</h5>
                <span className="mb-2 small text-muted">Temporada: {data.temporada}</span>
                <span className="mb-2 small text-muted">${data.precio}</span>
                <p className="mb-1">{data.cantidad}</p>

                <ItemTallesList data={data.selectStock} handleDelete={onDeleteTalle}></ItemTallesList>
            </Col>
            <Col xs={3} md={3} className="d-flex justify-content-center align-items-center flex-column ">
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

                <Button className="mt-4 btn-delete" size="xm"  onClick={() => onDelete(data.id)}>
                    Eliminar
                </Button>
            </Col>
        </Row>
    );
};

export default ItemCart;
