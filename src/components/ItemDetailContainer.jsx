import { useEffect, useState } from 'react'
import { getProductById } from '../mocks/AsyncMock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [data, setData] = useState('')

    useEffect(() => {
        getProductById(2)
            .then((res) => { setData(res[0]) })
            .catch((error) => { console.error(error) })
            .finally(() => {
                console.log("Finalizó el proceso de carga");
            });
    }, [])

    return (
        <div>
            <ItemDetail dataDetail={data} />
        </div>
    )
}

export default ItemDetailContainer;