import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Item({ dataShirt }) {
    const [boxShadow, setBoxShadow] = useState('');

    const initialPrice = dataShirt.price;
    const finalPrice = dataShirt.onSale ? initialPrice * dataShirt.discPerc : initialPrice;

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
            <Card.Img variant="top" src={dataShirt.img} alt={dataShirt.name}/>
            <Card.Body>
                <Card.Title>{dataShirt.name}</Card.Title>

                <Card.Text className="mb-1">
                    Precio:&nbsp;
                    {dataShirt.onSale ? 
                    <>
                        <span style={{textDecorationLine:'line-through' }}>${initialPrice}</span> &nbsp;
                        <span style={{color:'red' }}>${finalPrice}</span>
                    </> :
                        <span>${finalPrice}</span>    
                    }

                </Card.Text>
                <Card.Text className="mb-1">
                    Temporada: {dataShirt.season}
                </Card.Text>
                <Card.Text className="mb-1 small text-muted">
                    {dataShirt.category}
                </Card.Text>

                <div className="d-flex justify-content-center mt-3">
                    <Link to={`/detail/${dataShirt.id}`} className="btn btn-dark">Comprar</Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Item;