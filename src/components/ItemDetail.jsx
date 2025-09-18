import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import SizesList from './SizesList';
import ItemSizesList from './ItemSizesList';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'

const ItemDetail = ({ dataDetail }) => {
    const initialPrice = dataDetail.price;
    const finalPrice = dataDetail.onSale ? initialPrice * dataDetail.discPerc : initialPrice;
    const { addItemCart, deleteItemCart, itemCartStock } = useContext(CartContext);
    const [size, setSize] = useState('');
    const [availableStock, setAvailableStock] = useState('');
    const [arrayStock, setArrayStock] = useState(itemCartStock(dataDetail.id));
    const [itemAdd, setItemAdd] = useState(false);

    const onAddStock = (quantity) => {
        if (arrayStock.length === 0) {
            setArrayStock([{ size, quantity: quantity }]);
        } else {
            const existSize = arrayStock.some(obj => obj.size === size);

            if (existSize) {
                setArrayStock(arrayStock.map((elem) =>
                    elem.size === size ? { ...elem, quantity: elem.quantity + quantity } : elem
                ));
            } else {
                setArrayStock([...arrayStock, { size, quantity: quantity }]);
            }
        }
    };

    const onAddItem = () => {
        setItemAdd(true);
        addItemCart(dataDetail, arrayStock);

        Swal.fire({
            title: "Camiseta agregada!",
            icon: "success",
            draggable: true
        });
    }

    const selectSize = (btnValue) => {
        setSize(btnValue)

        let stockAvailableSize = dataDetail.stock.find((elem) => elem.size === btnValue);
        setAvailableStock(stockAvailableSize.quantity)
    }

    const onDelete = (id) => {

        Swal.fire({
            title: "Seguro desea borrar la camiseta del carrito?",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItemCart(id);
                setArrayStock([])
            }
        });
    }

    const onDeleteSize = (sizeStock) => {
        const updateArrayStock = arrayStock.filter((elem) => elem.size !== sizeStock)
        setArrayStock(updateArrayStock)
    }

    return (
        <Container>
            <Row className="align-items-start justify-content-center">
                <Col md={6} lg={5} className="d-flex justify-content-center">
                    <Card className="border-0">
                        <Card.Img src={dataDetail.img} alt={dataDetail.name} className="img-fluid rounded shadow" style={{ maxHeight: '400px', objectFit: 'contain' }}
                        />
                    </Card>
                </Col>

                <Col md={6} lg={5}>
                    <Card className="border-0">
                        <Card.Body className="py-0">
                            <Card.Title className="fs-2 fw-bold">{dataDetail.name}</Card.Title>

                            <Card.Text className="mb-2">
                                Precio:&nbsp;

                                {dataDetail.onSale && (
                                    <span className="text-decoration-line-through p-0 m-0">
                                        ${initialPrice}&nbsp;
                                    </span>
                                )}
                                <span className={dataDetail.onSale ? "text-danger p-0 m-0" : "p-0 m-0"}>
                                    ${finalPrice}
                                </span>
                            </Card.Text>

                            <Card.Text className="mb-2">Temporada: {dataDetail.season}</Card.Text>
                            <Card.Text className="mb-2 small text-muted">{dataDetail.category}</Card.Text>
                            <Card.Text className="mb-2">Seleccionar Talle </Card.Text>

                            <SizesList data={dataDetail.stock} select={selectSize} selected={size} />
                            <Card.Text className="mb-0 small text-muted">Stock {availableStock}</Card.Text>

                            {!itemAdd ?
                                <>
                                    <ItemCount stock={availableStock} onAdd={onAddStock} sizeSelect={size} />
                                    <ItemSizesList data={arrayStock} handleDelete={onDeleteSize} typeFlex={"flex-wrap"}></ItemSizesList>
                                    <Row className='d-flex justify-content-between mt-3'>
                                        <Col>
                                            <Button className='btn btn-dark' onClick={onAddItem} disabled={arrayStock.length === 0}>Confirmar</Button>
                                        </Col>
                                        <Col>
                                            <Button className='btn-delete' onClick={() => onDelete(dataDetail.id)} disabled={arrayStock.length === 0}>Eliminar</Button>
                                        </Col>
                                    </Row>
                                </>
                                :
                                <>
                                    <NavLink className='btn btn-dark mt-2 ' to="/cart">
                                        Ir al Carrito
                                    </NavLink>
                                </>
                            }

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail;