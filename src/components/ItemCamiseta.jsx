import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemCamiseta({ dataCamiseta }) {
    const [boxShadow, setBoxShadow] = useState('');

    const precioInicial = dataCamiseta.precio;
    const precioFinal = dataCamiseta.oferta ? precioInicial * dataCamiseta.porcDesc : precioInicial;

    const handleHover = () => {
        setBoxShadow('0 8px 20px rgba(0, 0, 0, 0.55)');
    }

    const handleLeave = () => {
        setBoxShadow('');
    };

    return (
        <Card
            style={{
                width: '15rem',
                boxShadow: boxShadow,
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}>
            <Card.Img variant="top" src={dataCamiseta.img} alt={dataCamiseta.nombre}/>
            <Card.Body>
                <Card.Title>{dataCamiseta.nombre}</Card.Title>

                <Card.Text className="mb-1">
                    Precio:&nbsp;
                    {dataCamiseta.oferta ? 
                    <>
                        <span style={{textDecorationLine:'line-through' }}>${precioInicial}</span> &nbsp;
                        <span style={{color:'red' }}>${precioFinal}</span>
                    </> :
                        <span>${precioFinal}</span>    
                    }

                </Card.Text>
                <Card.Text className="mb-1">
                    Temporada: {dataCamiseta.temporada}
                </Card.Text>
                <Card.Text className="mb-1 categoryDescription">
                    {dataCamiseta.categoria}
                </Card.Text>

                <div className="d-flex justify-content-center mt-3">
                    <Link to={`/detail/${dataCamiseta.id}`} className="btn btn-dark">Comprar</Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ItemCamiseta;