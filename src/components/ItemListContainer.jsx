import { useEffect, useState } from 'react'
import { getProductos } from '../mocks/AsyncMock'
import ItemList from './ItemList'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const { category } = useParams();
    const [data, setData] = useState([])
    let resFilter = [];

    useEffect(() => {
        getProductos()
            .then((res) => {
                if (category) {
                    if (category === "Oferta") {
                        resFilter = res.filter((item) => item.oferta == true)
                    } else {
                        resFilter = res.filter((item) => item.categoria === category)
                    }
                    setData(resFilter);
                } else {
                    setData(res)
                }
            })
            .catch((error) => { console.error(error) })
            .finally(() => {
                console.log("Finalizó el proceso de carga");
            });
    }, [category])

    return (
        <Container>
            <ItemList dataItemList={data} />
        </Container>
    )
}

export default ItemListContainer;