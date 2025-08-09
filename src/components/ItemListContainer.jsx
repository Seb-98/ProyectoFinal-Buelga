import { useEffect, useState } from 'react'
import { getProductos } from '../mocks/AsyncMock'
import ItemList from './ItemList'
import '../css/styleListContainer.css'

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
            <div className="d-flex justify-content-center pb-3">
                <h5 className="titleListContainer">
                    Bienvenido a GoalStreet! Tu mejor pagina para comprar camisetas de tus equipos favoritos
                </h5>
            </div>

            <ItemList dataList={data} />
        </div>
    )
}

export default ItemListContainer;