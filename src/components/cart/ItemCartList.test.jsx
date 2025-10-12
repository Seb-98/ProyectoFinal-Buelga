import { render, screen } from '@testing-library/react'
import ItemCartList from './ItemCartList'

const mockData = [
    {
        "id": "8VjMXYfZ9Y9nBUc3qWmx",
        "discPerc": 0.9,
        "price": 125000,
        "category": "Selecciones",
        "stock": [
            {
                "quantity": 7,
                "size": "S"
            },
            {
                "size": "M",
                "quantity": 18
            },
            {
                "size": "XL",
                "quantity": 13
            }
        ],
        "season": "1994",
        "onSale": true,
        "img": "/images/argentina-suplente-1994.webp",
        "name": "Product 1",
        "selectStock": [
            {
                "size": "S",
                "quantity": 2
            },
            {
                "size": "M",
                "quantity": 2
            }
        ]
    },
    {
        "id": "BlF81wrMZ0s265vW3khv",
        "price": 120000,
        "discPerc": 0,
        "onSale": false,
        "name": "Product 2",
        "season": "24/25",
        "img": "/images/san-lorenzo-2025.webp",
        "category": "Local",
        "stock": [
            {
                "quantity": 14,
                "size": "S"
            },
            {
                "size": "M",
                "quantity": 13
            },
            {
                "quantity": 17,
                "size": "X"
            },
            {
                "size": "XL",
                "quantity": 11
            }
        ],
        "selectStock": [
            {
                "size": "X",
                "quantity": 2
            },
            {
                "size": "S",
                "quantity": 1
            }
        ]
    }
]

describe('ItemCartList Componet', () => {
    test('render item cart list'), () => {
        render(
            <ItemCartList dataCartList={mockData} />
        )

        expect(screen.getAllByText(/Producto/)).toHaveLength(2)

        expect(screen.getByText('Producto 1')).toBeInTheDocument()
        expect(screen.getByText('Producto 2')).toBeInTheDocument()
    }

    test('renders empty list without crashing', () => {
        render(<ItemCartList dataCartList={[]} />)
    })
})
