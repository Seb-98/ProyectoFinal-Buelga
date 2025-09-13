import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import TallesList from './TallesList';
import { useState } from 'react';
import ItemTallesList from './ItemTallesList';
import { NavLink } from 'react-router-dom';

const ItemDetail = ({ dataDetail }) => {
    const precioInicial = dataDetail.precio;
    const precioFinal = dataDetail.oferta ? precioInicial * dataDetail.porcDesc : precioInicial;
    const { addItemCart, deleteItemCart, cart, deleteTalleItemCart, itemCartStock } = useContext(CartContext);
    const [talle, setTalle] = useState('');
    const [stockDisponible, setStockDisponible] = useState('');
    const [arrayStock, setArrayStock] = useState(itemCartStock(dataDetail.id));
    const [itemAdd, setItemAdd] = useState(false);

    const onAddStock = (cantidad) => {
        if (arrayStock.length === 0) {
            setArrayStock([{ talle, quantity: cantidad }]);
        } else {
            const existeTalle = arrayStock.some(obj => obj.talle === talle);

            if (existeTalle) {
                setArrayStock(arrayStock.map((elem) =>
                    elem.talle === talle ? { ...elem, quantity: elem.quantity + cantidad } : elem
                ));
            } else {
                setArrayStock([...arrayStock, { talle, quantity: cantidad }]);
            }
        }
    };

    const onAddItem = () => {
        setItemAdd(true);
        addItemCart(dataDetail, arrayStock);
    }

    const selectTalle = (btnValue) => {
        setTalle(btnValue)

        let stockDisponibleTalle = dataDetail.stock.find((elem) => elem.talle === btnValue);
        setStockDisponible(stockDisponibleTalle.cantidad)
    }

    const onDelete = (id) => {
        deleteItemCart(id);
        setArrayStock([])
    }
    const onDeleteTalle = (talleStock) => {
        console.log(arrayStock, 'arrayStock')
        console.log(talleStock, 'talleStock')
        const updateArrayStock = arrayStock.filter((elem) => elem.talle !== talleStock)
        setArrayStock(updateArrayStock)
        // deleteTalleItemCart(dataDetail.id, talleStock)
    }

    return (
        <Container>
            <Row className="align-items-start justify-content-center">
                <Col md={6} lg={5} className="d-flex justify-content-center">
                    <Card className="border-0">
                        <Card.Img src={dataDetail.img} alt={dataDetail.nombre} className="img-fluid rounded shadow" style={{ maxHeight: '400px', objectFit: 'contain' }}
                        />
                    </Card>
                </Col>

                <Col md={6} lg={5}>
                    <Card className="border-0">
                        <Card.Body className="py-0">
                            <Card.Title className="fs-2 fw-bold">{dataDetail.nombre}</Card.Title>

                            <Card.Text className="mb-2">
                                Precio:&nbsp;
                                {dataDetail.oferta ? (
                                    <>
                                        <span className="text-decoration-line-through">
                                            ${precioInicial}
                                        </span>
                                        &nbsp;
                                        <span className="text-danger">${precioFinal}</span>
                                    </>
                                ) : (
                                    <span>${precioFinal}</span>
                                )}
                            </Card.Text>

                            <Card.Text className="mb-2">Temporada: {dataDetail.temporada}</Card.Text>
                            <Card.Text className="mb-2 small text-muted">{dataDetail.categoria}</Card.Text>
                            <Card.Text className="mb-2">Seleccionar Talle </Card.Text>

                            <TallesList data={dataDetail.stock} select={selectTalle} selected={talle} />
                            <Card.Text className="mb-2 small tex t-muted">Stock {stockDisponible}</Card.Text>

                            {!itemAdd ?
                                <>
                                    <ItemCount stock={stockDisponible} onAdd={onAddStock} talleSelect={talle} />
                                    <ItemTallesList data={arrayStock} handleDelete={onDeleteTalle}></ItemTallesList>
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