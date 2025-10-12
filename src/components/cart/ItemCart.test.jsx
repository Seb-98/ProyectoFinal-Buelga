import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ItemCart from './ItemCart'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

vi.mock('sweetalert2', () => ({
    default: {
        fire: vi.fn()
    }
}))

vi.mock('../sizes/ItemSizesList', () => ({
    default: ({ data }) => <div>{data.name}</div>
}));

const mockData = {
    price: 100,
    discPerc: 0.8,
    onSale: true,
    selectStock: [
        { size: 'S', quantity: 2 },
        { size: 'M', quantity: 3 }
    ]
}

const calculateItemCart = (data) => {
    const unitInitialPrice = data.price
    const unitFinalPrice = data.onSale ? unitInitialPrice * data.discPerc : unitInitialPrice
    const quantity = data.selectStock.reduce((acc, elem) => acc + elem.quantity, 0)
    const initialPrice = data.price * quantity
    const finalPrice = data.onSale ? initialPrice * data.discPerc : initialPrice
    return { unitInitialPrice, unitFinalPrice, quantity, initialPrice, finalPrice }
}

describe('ItemCart calculations', () => {
    test('calculates correctly for onSale product', () => {
        const result = calculateItemCart(mockData)
        expect(result.quantity).toBe(5)
        expect(result.unitFinalPrice).toBe(80)
        expect(result.initialPrice).toBe(500)
        expect(result.finalPrice).toBe(400)
    })

    test('calculates correctly for non-sale product', () => {
        const data = { ...mockData, onSale: false }
        const result = calculateItemCart(data)
        expect(result.unitFinalPrice).toBe(100)
        expect(result.finalPrice).toBe(500)
    })
})

describe('ItemCart Component', () => {
    test('calls deleteItemCart after confirmation', async () => {
        const deleteItemCart = vi.fn()
        const deleteSizeItemCart = vi.fn()

        Swal.fire.mockResolvedValueOnce({ isConfirmed: true })

        render(
            <CartContext.Provider value={{ deleteItemCart, deleteSizeItemCart }}>
                <ItemCart data={mockData} />
            </CartContext.Provider>
        )

        const button = screen.getByRole('button', { name: /eliminar/i })
        fireEvent.click(button)

        expect(Swal.fire.mock.calls[0][0]).toBeDefined() // verifica que se haya llamado con algún objeto

        await waitFor(() => {
            expect(deleteItemCart).toHaveBeenCalledWith(mockData.id)
        })
    })

    test('does not call deleteItemCart if user cancels', async () => {
        const deleteItemCart = vi.fn()
        const deleteSizeItemCart = vi.fn()

        Swal.fire.mockResolvedValueOnce({ isConfirmed: false })

        render(
            <CartContext.Provider value={{ deleteItemCart, deleteSizeItemCart }}>
                <ItemCart data={mockData} />
            </CartContext.Provider>
        )

        const button = screen.getByRole('button', { name: /eliminar/i })
        fireEvent.click(button)

        expect(Swal.fire.mock.calls[0][0]).toBeDefined() // verifica que se haya llamado con algún objeto

        await waitFor(() => {
            expect(deleteItemCart).not.toHaveBeenCalled()
        })
    })
})
