const products = [
    {
        id: 1,
        name: 'San lorenzo',
        price: 120000,
        season: '24/25',
        img: '/images/san-lorenzo-2025.webp',
        category: 'Local',
        onSale: false,
        discPerc: 0,
        stock: [
            { size: 'S', quantity: 14 },
            { size: 'M', quantity: 16 },
            { size: 'X', quantity: 20 },
            { size: 'XL', quantity: 11 }
        ]
    },
    {
        id: 2,
        name: 'Liverpool',
        price: 120000,
        season: '18/19',
        img: '/images/liverpool-2018.webp',
        category: 'Internacional',
        onSale: true,
        discPerc: 0.80,
        stock: [
            { size: 'S', quantity: 11 },
            { size: 'M', quantity: 15 },
        ]
    },
    {
        id: 3,
        name: 'Argentina',
        price: 150000,
        season: '2022',
        img: '/images/argentina-2022.webp',
        category: 'Selecciones',
        onSale: false,
        discPerc: 0,
        stock: [
            { size: 'M', quantity: 10 },
            { size: 'X', quantity: 20 }
        ]
    },
    {
        id: 4,
        name: "Brasil '02",
        price: 130000,
        season: '2002',
        img: '/images/brasil-2002.webp',
        category: 'Selecciones',
        onSale: true,
        discPerc: 0.80,
        stock: [
            { size: 'M', quantity: 12 },
            { size: 'X', quantity: 14 },
            { size: 'XL', quantity: 20 }
        ]
    },
    {
        id: 5,
        name: 'River',
        price: 170000,
        season: '24/25',
        img: '/images/river-alt-2025.webp',
        category: 'Local',
        onSale: false,
        discPerc: 0,
        stock: [
            { size: 'M', quantity: 15 },
        ]
    },
    {
        id: 6,
        name: 'Manchester United',
        price: 115000,
        season: '2008',
        img: '/images/manchester-united-2008.webp',
        category: 'Internacional',
        onSale: false,
        discPerc: 0,
        stock: [
            { size: 'S', quantity: 7 },
        ]
    },
    {
        id: 7,
        name: "Argentina '94",
        price: 125000,
        season: '1994',
        img: '/images/argentina-suplente-1994.webp',
        category: 'Selecciones',
        onSale: true,
        discPerc: 0.90,
        stock: [
            { size: 'S', quantity: 11 },
            { size: 'M', quantity: 20 },
            { size: 'XL', quantity: 15 }
        ]
    },
    {
        id: 8,
        name: "Boca",
        price: 165000,
        season: '24/25',
        img: '/images/boca-2025.webp',
        category: 'Local',
        onSale: false,
        discPerc: 0,
        stock: [
            { size: 'S', quantity: 11 },
            { size: 'M', quantity: 16 },
            { size: 'X', quantity: 20 },
            { size: 'XL', quantity: 20 }
        ]
    },
    {
        id: 9,
        name: "Milan '06",
        price: 125000,
        season: '2006',
        img: '/images/milan-2006.webp',
        category: 'Internacional',
        onSale: true,
        discPerc: 0.75,
        stock: [
            { size: 'S', quantity: 15 },
            { size: 'X', quantity: 16 }
        ]
    },
    {
        id: 10,
        name: "Independiente",
        price: 145000,
        season: '24/25',
        img: '/images/independiente-2025.webp',
        category: 'Local',
        onSale: false,
        discPerc: 0,
        stock: [
            { size: 'S', quantity: 20 },
            { size: 'M', quantity: 20 },
            { size: 'X', quantity: 20 }
        ]
    }
]

export const getProducts = () => {
    let errorPromise = true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (errorPromise) {
                resolve(products)
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