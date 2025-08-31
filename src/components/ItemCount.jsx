import { useState } from 'react'
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, onAdd, talleSelect, onDelete }) => {
    const [count, setCount] = useState(0);

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
                <Button className='btn btn-dark' disabled={talleSelect == ''} onClick={restar}>-</Button>
                <span className='btn'>{count}</span>
                <Button className='btn btn-dark' disabled={talleSelect == ''} onClick={sumar}>+</Button>
            </div>
            <Button className='btn btn-dark' disabled={stock === 0 || count === 0} onClick={() => onAdd(count)}>Agregar</Button>
            <Button className='btn btn-danger' onClick={onDelete}>Eliminar</Button>
        </div>
    );
}

export default ItemCount;