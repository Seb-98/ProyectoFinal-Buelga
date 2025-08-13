import { useEffect, useState } from 'react'
import { getProductos } from '../mocks/AsyncMock'
import ItemList from './ItemList'
import '../css/styleListContainer.css'
import {Container} from 'react-bootstrap';

const ItemListContainer = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getProductos()
            .then((res) => { setData(res) })
            .catch((error) => { console.error(error) })
            .finally(() => {
                console.log("Finalizó el proceso de carga");
            });
    }, [])

    return (
        <Container>
            <ItemList dataList={data} />
        </Container>
    )
}

export default ItemListContainer;