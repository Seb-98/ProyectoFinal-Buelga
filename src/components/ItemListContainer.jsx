import { useEffect, useState } from 'react'
import { getProductos } from '../mocks/AsyncMock'
import ItemList from './ItemList'

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
        <div className="p-3">
            <h5 style={{ color: '#030382', height: '30px' }}>
                Bienvenido a Retro Futbol! Tu mejor pagina para comprar camisetas de tus equipos favoritos</h5>

            <ItemList dataList={data} />
        </div>
    )
}

export default ItemListContainer;