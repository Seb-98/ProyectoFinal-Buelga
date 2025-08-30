import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, onAdd, value }) => {
    const [count, setCount] = useState(value)

    useEffect(() => {
        setCount(value);
    }, [value]);

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='d-flex justify-content-center justify-content-md-start mt-3 flex-wrap gap-3 mb-3'>
            <div>
                <button className='btn btn-dark' onClick={restar}>-</button>
                <span className='btn'>{count}</span>
                <button className='btn btn-dark' onClick={sumar}>+</button>
            </div>
            <Button className='btn btn-dark' disabled={stock === 0 || count === 0} onClick={() => onAdd(count)}>Agregar</Button>
        </div>
    );
}

export default ItemCount;