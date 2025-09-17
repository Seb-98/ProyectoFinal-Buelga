import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, onAdd, sizeSelect }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(0);
    }, [onAdd])

    const add = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const subtract = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='d-flex my-2 gap-3'>
            <div>
                <Button className='btn btn-dark' disabled={sizeSelect == ''} onClick={subtract}>-</Button>
                <span className='btn'>{count}</span>
                <Button className='btn btn-dark' disabled={sizeSelect == ''} onClick={add}>+</Button>
            </div>
            <Button className='btn btn-dark' disabled={stock === 0 || count === 0} onClick={() => onAdd(count)}>Agregar</Button>
        </div>
    );
}

export default ItemCount;