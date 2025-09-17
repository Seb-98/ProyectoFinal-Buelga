import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Loader from './Loader';
import { db } from '../service/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const { category } = useParams();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        let productsCollection = [];
        if (category) {
            if (category === "Oferta") {
                productsCollection = query(collection(db, 'products'), where("onSale", "==", true));
            } else {
                productsCollection = query(collection(db, 'products'), where("category", "==", category));
            }
        } else {
            productsCollection = collection(db, 'products');
        }

        getDocs(productsCollection)
            .then((res) => {
                const dataList = res.docs.map((item) => {
                    return {
                        id: item.id,
                        ...item.data()
                    }
                })
                setData(dataList);
            })
            .catch((error) => {
                console.error("Error al traer coleccion: " + error)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [category])

    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            <ItemList dataItemList={data} />
        </Container>
    )
}

export default ItemListContainer;