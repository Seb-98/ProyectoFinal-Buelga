import { Container, Card, Button } from 'react-bootstrap';
import { useState } from 'react';

const ItemDetail = ({ dataDetail }) => {
    const [count, setCount] = useState(0)

    const precioInicial = dataDetail.precio;
    const precioFinal = dataDetail.oferta ? precioInicial * dataDetail.porcDesc : precioInicial;

    const handleChange = () => {
        const suma = count + 1;
        setCount(suma);
    }

    return (
        <Container>
            <Card className="mb-4" style={{ width: '18rem', height: '450px' }}>
                <Card.Img variant="top" src={dataDetail.img} />
                <Card.Body>
                    <Card.Title>{dataDetail.nombre}</Card.Title>

                    <Card.Text className="mb-1">
                        Precio:&nbsp;
                        {dataDetail.oferta ?
                            <>
                                <span style={{ textDecorationLine: 'line-through' }}>${precioInicial}</span> &nbsp;
                                <span style={{ color: 'red' }}>${precioFinal}</span>
                            </> :
                            <span>${precioFinal}</span>
                        }
                    </Card.Text>

                    <div className="d-flex justify-content-center mt-3">
                        <input type="number" value={count} onChange={handleChange} min={0} max={3} style={{ width: '40px' }}></input>
                        <Button variant="dark" className="">Agregar</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ItemDetail;