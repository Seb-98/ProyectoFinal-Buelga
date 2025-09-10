import { collection, getDocs, query, where } from "firebase/firestore";
import { db, insertSingleItem } from '../service/firebase';
import { serverTimestamp } from "firebase/database";

//funcion que valida q si no existe cliente, lo inserta
export async function validateClient(data) {
    try {
        const clientCollection = query(collection(db, 'clients'), where("Email", "==", data.Email));

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