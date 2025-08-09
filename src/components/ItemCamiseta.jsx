import { Button, Card } from 'react-bootstrap';

function ItemCamiseta({ dataCamiseta }) {
    const precioInicial = dataCamiseta.precio;
    const precioFinal = dataCamiseta.oferta ? precioInicial * dataCamiseta.porcDesc : precioInicial;

    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={dataCamiseta.img} />
            <Card.Body>
                <Card.Title>{dataCamiseta.nombre}</Card.Title>

                <Card.Text className="mb-1">
                    Precio:<span>${precioFinal}</span>
                </Card.Text>
                <Card.Text className="mb-1">
                    Temporada:{dataCamiseta.temporada}
                </Card.Text>

                <Button variant="success">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default ItemCamiseta;