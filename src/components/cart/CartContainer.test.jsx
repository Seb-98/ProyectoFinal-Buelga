import { render, screen } from '@testing-library/react'
import CartContainer from './CartContainer'
import { CartContext } from '../../context/CartContext'
import { MemoryRouter } from 'react-router-dom'

const mockData = [    {
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
        "name": "Argentina '94",
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
        "name": "Producto 2",
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

describe('CartContainer Component', () => {
    test('render cart container', () => {
        render(
            <CartContext.Provider value={{ cart: mockData, totalCart: 1, clearCart: vi.fn() }}>
                <MemoryRouter>
                    <CartContainer />
                </MemoryRouter>
            </CartContext.Provider>
        )

        expect(screen.getByText(/Total \$1/i)).toBeInTheDocument()

    })

    test('render empty cart container', () => {
        render(
            <CartContext.Provider value={{ cart: mockData, totalCart: 1, clearCart: vi.fn() }}>
                <MemoryRouter>
                    <CartContainer />
                </MemoryRouter>
            </CartContext.Provider>
        )
    })
})