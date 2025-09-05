// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { addDoc, collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { getProductos } from "../mocks/AsyncMock";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBA21IG_C1APQ09qJl5LzkQNkTKKKcI1H0",
    authDomain: "coderhouse-goalstreet.firebaseapp.com",
    projectId: "coderhouse-goalstreet",
    storageBucket: "coderhouse-goalstreet.firebasestorage.app",
    messagingSenderId: "257937196588",
    appId: "1:257937196588:web:2f62b771fe02515b1c7389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function getSingleItem(id) {
    const documentRef = doc(db, 'products', id);

    try {
        const snapshot = await getDoc(documentRef);
        if (snapshot.exists()) {
            return snapshot.data();
        } else {
            console.log("no existe el producto")
        }
    } catch (error) {
        console.error("error al obtener producto " + error);
    }
}

//funcion para agregar la const de productos q tenia de antes
export async function addListProduct() {
    const itemCollectionRef = collection(db, 'products');

    let arrayProductos = []
    getProductos()
        .then((res) => {
            arrayProductos = res;

            const productosSinId = arrayProductos.map(({ id, ...resto }) => resto);

            productosSinId.map(async (elem) => {
                try {
                    const docRef = await addDoc(itemCollectionRef, elem);
                    console.log("documento creado ID:" + docRef.id);
                } catch (error) {
                    console.log("Error al agregar documento: ", error)
                }
            })
        })
        .catch((error) => { console.error(error) })
        .finally(() => {
            console.log("Finalizó el proceso de carga");
        });
}