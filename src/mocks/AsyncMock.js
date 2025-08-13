const productos = [
    {
        id: 1,
        nombre: 'San lorenzo',
        precio: 90000,
        temporada: '24/25',
        img: 'public/images/san-lorenzo-2025.webp',
        categoria: 'Local',
        oferta: false,
        porcDesc: 0,
        stock: 20
    },
    {
        id: 2,
        nombre: 'Liverpool',
        precio: 120000,
        temporada: '18/19',
        img: 'public/images/liverpool-2018.webp',
        categoria: 'Internacional',
        oferta: true,
        porcDesc: 0.80,
        stock: 20
    },
    {
        id: 3,
        nombre: 'Argentina',
        precio: 150000,
        temporada: '2022',
        img: 'public/images/argentina-2022.webp',
        categoria: 'Seleccion',
        oferta: false,
        porcDesc: 0,
        stock: 20
    }
]

export const getProductos = () => {
    let errorPromise = true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (errorPromise) {
                resolve(productos)
            } else {
                reject("Hubo un error al traer los productos");
            }
        }, 2000);
    })
}

// export const getProductos = () => {

//     return fetch('src/dataStock.json')
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Error en la solicitud');
//             }
//             return response.json();
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// };