import { useEffect, useState } from 'react'
import { getProductById } from '../mocks/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [data, setData] = useState('')

    useEffect(() => {
        console.log(id,'useEffect');
        getProductById(id)
            .then((res) => { setData(res[0]) })
            .catch((error) => { console.error(error) })
            .finally(() => {
                console.log("Finalizó el proceso de carga");
            });
    }, [id])

    return (
        <div>
            <ItemDetail dataDetail={data} />
        </div>
    )
}

export default ItemDetailContainer;