import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import CartWidget from './CartWidget'

// 🔹 Creamos un contexto simulado con un valor de prueba
const mockContextValue = {
    cartCount: 5
}

describe('CartWidget Component', () => {
    test('renders cart icon, count and link', () => {
        render(
            <CartContext.Provider value={mockContextValue}>
                <MemoryRouter>
                    <CartWidget />
                </MemoryRouter>
            </CartContext.Provider>
        )

        // 1️⃣ Verificar que el ícono está presente
        const cartIcon = screen.getByTestId('cart-icon')
        expect(cartIcon).toBeInTheDocument()

        // 2️⃣ Verificar que el número del carrito se muestra
        const badge = screen.getByText('5')
        expect(badge).toBeInTheDocument()

        // 3️⃣ Verificar que el enlace apunta a /cart
        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', '/cart')
    })
})
