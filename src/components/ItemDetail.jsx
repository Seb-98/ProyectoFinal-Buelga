import { Container, Card, Row, Col } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import TallesList from './TallesList';
import { useState } from 'react';


const ItemDetail = ({ dataDetail }) => {

    const precioInicial = dataDetail.precio;
    const precioFinal = dataDetail.oferta ? precioInicial * dataDetail.porcDesc : precioInicial;
    const { addItemCart } = useContext(CartContext);
    const [talle, setTalle] = useState('');
    

    const onAdd = (cantidad) => {
        addItemCart(dataDetail, cantidad, talle);
    }

    const selectTalle = (btnValue) =>{
        setTalle(btnValue)
    }


    return (
        <Container>
            <Row className="align-items-center justify-content-center">
                <Col md={6} lg={5} className="d-flex justify-content-center">
                    <Card className="border-0">
                        <Card.Img src={dataDetail.img} alt={dataDetail.nombre} className="img-fluid rounded shadow" style={{ maxHeight: '400px', objectFit: 'contain' }}
                        />
                    </Card>
                </Col>

                <Col md={6} lg={5}>
                    <Card className="border-0">
                        <Card.Body>
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
                            <Card.Text className="mb-2">Seleccionar Talle </Card.Text>

                            <TallesList data={dataDetail.nuevoStock} select={selectTalle}/>

                            <Card.Text className="mb-2 small text-muted">Stock {dataDetail.categoria}</Card.Text>
                            <Card.Text className="mb-2 small text-muted">{dataDetail.categoria}</Card.Text>

                            <ItemCount stock={dataDetail.stock} onAdd={onAdd} talleSelect={talle} />

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail;