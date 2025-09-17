import { Row, Col, Button, Image } from "react-bootstrap";
import ItemTallesList from "./ItemTallesList";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from 'react'
import Swal from 'sweetalert2'

const ItemCart = ({ data }) => {
    const [boxShadow, setBoxShadow] = useState('');
    const unitInitialPrice = data.precio;
    const unitFinalPrice = data.oferta ? unitInitialPrice * data.porcDesc : unitInitialPrice;
    const quantity = data.selectStock.reduce((acumulador, elem) => acumulador + elem.quantity, 0);
    const initialPrice = data.precio * quantity;
    const finalPrice = data.oferta ? initialPrice * data.porcDesc : initialPrice;
    const { deleteTalleItemCart, deleteItemCart } = useContext(CartContext)

    const onDeleteTalle = (talleStock) => {
        deleteTalleItemCart(data.id, talleStock)
    }

    const onDelete = (id) => {
        Swal.fire({
            title: "Seguro desea borrar la camiseta del carrito?",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItemCart(id);
            }
        });
    }

    const handleHover = () => {
        setBoxShadow('0 8px 20px rgba(0, 0, 0, 0.55)');
    }

    const handleLeave = () => {
        setBoxShadow('');
    };

    return (
        <Row className="d-flex align-items-start mb-3 mx-0 px-3 border rounded p-2 itemCart"
            style={{
                boxShadow: boxShadow,
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
        >
            <Col xs={5} md={4} className="p-0">
                <Image src={data.img} alt={data.nombre} rounded className="itemCartImg"/>
            </Col>
            <Col xs={4} md={5} className="d-flex flex-column justify-content-between">
                <h5>{data.nombre}</h5>
                <ItemTallesList data={data.selectStock} handleDelete={onDeleteTalle} typeFlex={"flex-column"}></ItemTallesList>
            </Col>
            <Col xs={3} md={3} className="d-flex justify-content-center align-items-center flex-column ">

                {data.oferta && (
                    <span className="text-decoration-line-through text-muted p-0 m-0 small">
                        ${unitInitialPrice}
                    </span>
                )}
                <span className="p-0 m-0 mb-1 text-muted small">
                    ${unitFinalPrice}
                </span>

                {data.oferta && (
                    <h5 className="text-decoration-line-through m-0">
                        ${initialPrice}
                    </h5>
                )}
                <h5 className={data.oferta ? "text-danger p-0 m-0" : "p-0 m-0"}>
                    ${finalPrice}
                </h5>

                <Button className="mt-2 btn-delete" size="xm" onClick={() => onDelete(data.id)}>
                    Eliminar
                </Button>
            </Col>
        </Row>
    );
};

export default ItemCart;
