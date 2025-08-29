import { useState } from 'react'
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(0)

    const sumar = () => {
        const procesValueSum = count + 1;
        if (procesValueSum <= stock) {
            setCount(procesValueSum)
        }
    }

    const restar = () => {
        const procesValue = count - 1;
        if (procesValue >= 0) {
            setCount(procesValue)
        }
    }

    return (
        <div className='d-flex justify-content-center justify-content-md-start mt-3 flex-wrap gap-3 mb-3'>
            <div>
                <button className='btn btn-dark' onClick={restar}>-</button>
                <span className='btn'>{count}</span>
                <button className='btn btn-dark' onClick={sumar}>+</button>
            </div>

            <Button className='btn btn-dark'>Agregar</Button>
        </div>
    );
}

export default ItemCount;