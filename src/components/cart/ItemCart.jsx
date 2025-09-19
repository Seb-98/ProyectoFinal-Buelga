import { Row, Col, Button, Image } from "react-bootstrap";
import ItemSizesList from "../sizes/ItemSizesList";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from 'react'
import Swal from 'sweetalert2'

const ItemCart = ({ data }) => {
    const [boxShadow, setBoxShadow] = useState('');
    const unitInitialPrice = data.price;
    const unitFinalPrice = data.onSale ? unitInitialPrice * data.discPerc : unitInitialPrice;
    const quantity = data.selectStock.reduce((acumulador, elem) => acumulador + elem.quantity, 0);
    const initialPrice = data.price * quantity;
    const finalPrice = data.onSale ? initialPrice * data.discPerc : initialPrice;
    const { deleteSizeItemCart, deleteItemCart } = useContext(CartContext)

    const onDeleteSize = (sizeStock) => {
        deleteSizeItemCart(data.id, sizeStock)
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
                <Image src={data.img} alt={data.name} rounded className="itemCartImg"/>
            </Col>
            <Col xs={4} md={5} className="d-flex flex-column align-items-center justify-content-between  my-auto">
                <span className="nameShirtItemCart">{data.name}</span>
                <ItemSizesList data={data.selectStock} handleDelete={onDeleteSize} typeFlex={"flex-column"}></ItemSizesList>
            </Col>
            <Col xs={3} md={3} className="d-flex justify-content-center align-items-center flex-column my-auto">

                {data.onSale && (
                    <span className="text-decoration-line-through text-muted p-0 m-0 small">
                        ${unitInitialPrice}
                    </span>
                )}
                <span className="p-0 m-0 mb-1 text-muted small">
                    ${unitFinalPrice}
                </span>

                {data.onSale && (
                    <span className="text-decoration-line-through m-0 priceTextItemCart">
                        ${initialPrice}
                    </span>
                )}
                <span className={data.onSale ? "text-danger p-0 m-0 priceTextItemCart" : "p-0 m-0 priceTextItemCart"}>
                    ${finalPrice}
                </span>

                <Button className="mt-2 btn-delete" size="xm" onClick={() => onDelete(data.id)}>
                    Eliminar
                </Button>
            </Col>
        </Row>
    );
};

export default ItemCart;
