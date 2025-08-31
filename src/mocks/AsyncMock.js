const productos = [
    {
        id: 1,
        nombre: 'San lorenzo',
        precio: 120000,
        temporada: '24/25',
        img: '/images/san-lorenzo-2025.webp',
        categoria: 'Local',
        oferta: false,
        porcDesc: 0,
        stock: [
            { talle: 'S', cantidad: 14 },
            { talle: 'M', cantidad: 16 },
            { talle: 'X', cantidad: 20 }
        ]
    },
    {
        id: 2,
        nombre: 'Liverpool',
        precio: 120000,
        temporada: '18/19',
        img: '/images/liverpool-2018.webp',
        categoria: 'Internacional',
        oferta: true,
        porcDesc: 0.80,
        stock: [
            { talle: 'S', cantidad: 20 },
            { talle: 'M', cantidad: 20 },
            { talle: 'X', cantidad: 20 }
        ]
    },
    {
        id: 3,
        nombre: 'Argentina',
        precio: 150000,
        temporada: '2022',
        img: '/images/argentina-2022.webp',
        categoria: 'Selecciones',
        oferta: false,
        porcDesc: 0,
        stock: [
            { talle: 'S', cantidad: 20 },
            { talle: 'M', cantidad: 20 },
            { talle: 'X', cantidad: 20 }
        ]
    },
    {
        id: 4,
        nombre: "Brasil '02",
        precio: 130000,
        temporada: '2002',
        img: '/images/brasil-2002.webp',
        categoria: 'Selecciones',
        oferta: true,
        porcDesc: 0.80,
        stock: [
            { talle: 'S', cantidad: 20 },
            { talle: 'M', cantidad: 20 },
            { talle: 'X', cantidad: 20 }
        ]
    },
    {
        id: 5,
        nombre: 'River',
        precio: 170000,
        temporada: '24/25',
        img: '/images/river-alt-2025.webp',
        categoria: 'Local',
        oferta: false,
        porcDesc: 0,
        stock: [
            { talle: 'S', cantidad: 20 },
            { talle: 'M', cantidad: 20 },
            { talle: 'X', cantidad: 20 }
        ]
    },
    {
        id: 6,
        nombre: 'Manchester United',
        precio: 115000,
        temporada: '2008',
        img: '/images/manchester-united-2008.webp',
        categoria: 'Internacional',
        oferta: false,
        porcDesc: 0,
        stock: [
            { talle: 'S', cantidad: 20 },
            { talle: 'M', cantidad: 20 },
            { talle: 'X', cantidad: 20 }
        ]
    },
    {
        id: 7,
        nombre: "Argentina '94",
        precio: 125000,
        temporada: '1994',
        img: '/images/argentina-suplente-1994.webp',
        categoria: 'Selecciones',
        oferta: true,
        porcDesc: 0.90,
        stock: [
            { talle: 'S', cantidad: 20 },
            { talle: 'M', cantidad: 20 },
            { talle: 'X', cantidad: 20 }
        ]
    },
    {
        id: 8,
        nombre: "Boca",
        precio: 165000,
        temporada: '24/25',
        img: '/images/boca-2025.webp',
        categoria: 'Local',
        oferta: false,
        porcDesc: 0,
        stock: [
            { talle: 'S', cantidad: 20 },
            { talle: 'M', cantidad: 20 },
            { talle: 'X', cantidad: 20 }
        ]
    },
    {
        id: 9,
        nombre: "Milan '06",
        precio: 125000,
        temporada: '2006',
        img: '/images/milan-2006.webp',
        categoria: 'Internacional',
        oferta: true,
        porcDesc: 0.75,
        stock: [
            { talle: 'S', cantidad: 20 },
            { talle: 'M', cantidad: 20 },
            { talle: 'X', cantidad: 20 }
        ]
    },
    {
        id: 10,
        nombre: "Independiente",
        precio: 145000,
        temporada: '24/25',
        img: '/images/independiente-2025.webp',
        categoria: 'Local',
        oferta: false,
        porcDesc: 0,
        stock: [
            { talle: 'S', cantidad: 20 },
            { talle: 'M', cantidad: 20 },
            { talle: 'X', cantidad: 20 }
        ]
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

export const getProductById = (id) => {
    let errorPromise = true;

    return new Promise((resolve, reject) => {
        if (errorPromise) {
            resolve(productos.filter((item) => item.id == id))
        } else {
            reject("Hubo un error al traer los productos");
        }
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