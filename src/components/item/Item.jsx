import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function Item({ dataShirt }) {

    const initialPrice = dataShirt.price;
    const finalPrice = dataShirt.onSale ? initialPrice * dataShirt.discPerc : initialPrice;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.55)"
            }}
            whileTap={{ scale: 0.98 }}
            style={{ width: '15rem' }}
        >
            <Card style={{ width: '15rem',}}>
                <Card.Img variant="top" src={dataShirt.img} alt={dataShirt.name} />
                <Card.Body>
                    <Card.Title>{dataShirt.name}</Card.Title>

                    <Card.Text className="mb-1">
                        Precio:&nbsp;
                        {dataShirt.onSale ?
                            <>
                                <span style={{ textDecorationLine: 'line-through' }}>${initialPrice}</span> &nbsp;
                                <span style={{ color: 'red' }}>${finalPrice}</span>
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
        </motion.div>
    );
}

export default Item;