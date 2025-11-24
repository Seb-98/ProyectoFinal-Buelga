import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { useState } from 'react';
import SizesList from '../sizes/SizesList';
import ItemSizesList from '../sizes/ItemSizesList';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { addItemCart, deleteItemCart } from '../../redux/cart/cartSlice';
import { selectItemStock } from "../../redux/cart/cartSelectors";

const ItemDetail = ({ dataDetail }) => {
    const dispatch = useDispatch();
    const initialPrice = dataDetail.price;
    const finalPrice = dataDetail.onSale ? initialPrice * dataDetail.discPerc : initialPrice;
    const [size, setSize] = useState('');
    const [availableStock, setAvailableStock] = useState('');

    const itemStockInCart = useSelector(state => 
        selectItemStock(state, dataDetail.id)
    );
    const [arrayStock, setArrayStock] = useState(itemStockInCart);

    const [itemAdd, setItemAdd] = useState(false);
    const validateStock = dataDetail.stock || [];
    const totalStock = validateStock.reduce((acc, item) => acc + item.quantity, 0);

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
        dispatch(addItemCart({ item: dataDetail, selectStock: arrayStock }));

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
                dispatch(deleteItemCart(id));
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
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
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

                                {!validateStock.length || totalStock === 0 ?
                                    <>
                                        <h4 className="fw-bold">No hay stock para esta camiseta</h4>
                                        <Link to="/" className="btn btn-dark">Volver al menu</Link>
                                    </>
                                    :
                                    <>
                                        <Card.Text className="mb-2">Seleccionar Talle </Card.Text>
                                        <SizesList data={dataDetail.stock} select={selectSize} selected={size} />
                                        <Card.Text className="mb-0 small text-muted">Stock {availableStock}</Card.Text>

                                        {!itemAdd ?
                                            <>
                                                <ItemCount stock={availableStock} onAdd={onAddStock} sizeSelect={size} />
                                                <ItemSizesList data={arrayStock} handleDelete={onDeleteSize} typeFlex={"flex-wrap"}></ItemSizesList>
                                                <Row className='d-flex justify-content-start gap-1 mt-3'>
                                                    <Col>
                                                        <Button className='btn btn-dark' onClick={onAddItem} disabled={arrayStock.length === 0}>Confirmar</Button>
                                                    </Col>
                                                    <Col>
                                                        <Button className='btn-delete' onClick={() => onDelete(dataDetail.id)} disabled={arrayStock.length === 0}>Eliminar</Button>
                                                    </Col>
                                                    <Col>
                                                        <Link to="/" className="btn btn-primary">Volver al menu</Link>
                                                    </Col>
                                                </Row>
                                            </>
                                            :
                                            <div className='d-flex justify-content-start gap-2 mt-3'>
                                                <Link className='btn btn-dark' to="/cart">Ir al Carrito</Link>
                                                <Link to="/" className="btn btn-primary">Volver al menu</Link>
                                            </div>
                                        }
                                    </>
                                }

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </motion.div>
        </Container>
    )
}

export default ItemDetail;