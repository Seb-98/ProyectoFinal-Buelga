import { collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore";
import { db, insertSingleItem, getSingleItem } from '../service/firebase';
import { serverTimestamp } from "firebase/database";

//funcion que valida q si no existe cliente, lo inserta
export async function validateClient(data) {
    try {
        const clientCollection = query(collection(db, 'clients'), where("email", "==", data.email));

        const res = await getDocs(clientCollection);

        if (!res.empty) {
            const doc = res.docs[0];
            return { id: doc.id, ...doc.data() };
        } else {
            const dataInsert = await insertSingleItem(data, 'clients');
            return { id: dataInsert.id, ...dataInsert };
        }

    } catch (error) {
        console.error("Error al validar cliente:", error);
        return null;
    }
}

export async function endCheckout(data, total, idClient) {

    let checkoutData = {
        idClient: idClient,
        cart: data,
        total: total,
        date: serverTimestamp()
    }

    try {
        const dataInsert = await insertSingleItem(checkoutData, 'transactions');
        return { id: dataInsert.id };

    } catch {
        console.error("Error en el checkout:", error);
        return null;
    }
}

export async function updateStock(resumeCart) {

    try {
        for (const product of resumeCart) {     //foreach no conviene con async

            let arrayProduct = await getSingleItem(product.id, "products");     //obtengo el producto

            let updatedStock = arrayProduct.stock.map((item) => {       //recorro stock de producto
                let cartItem = product.articles.stock.find(            //busca el talle del producto en el talle del carrito
                    (elem) => elem.size === item.size
                );

                if (cartItem) {     //si existe el talle del producto en el carrito hace la resta sino devuelve el item normal
                    return {
                        ...item,
                        quantity: item.quantity - cartItem.quantity
                    };
                }
                return item;
            });

            const productRef = doc(db, "products", product.id);
            await updateDoc(productRef, { stock: updatedStock });

            console.log(`Stock actualizado para  el prod ${product.id}`);
        }
    } catch (error) {
        console.error("Error actualizando stock:", error);
    }
}