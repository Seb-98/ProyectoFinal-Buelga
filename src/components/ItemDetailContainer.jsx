import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader';
import { getSingleItem } from '../service/firebase';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        getSingleItem(id,'products')
            .then((elem) => {
                setData({
                    id: elem.id,
                    ...elem
                })
            })
            .catch((error) => {
                console.error("Error al obtener datos: " + error)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [id])

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <ItemDetail dataDetail={data} />
        </div>
    )
}

export default ItemDetailContainer;