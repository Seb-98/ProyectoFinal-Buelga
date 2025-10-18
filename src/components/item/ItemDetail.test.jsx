import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ItemDetail from './ItemDetail'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import { MemoryRouter } from 'react-router-dom'

vi.mock('sweetalert2', () => ({ default: { fire: vi.fn() } }))
vi.mock('../sizes/SizesList', () => ({ default: ({ select }) => <button onClick={() => select('M')}>Select Size</button> }))
vi.mock('../sizes/ItemSizesList', () => ({ default: () => <div>ItemSizesList</div> }))
vi.mock('./ItemCount', () => ({ default: ({ onAdd }) => <button onClick={() => onAdd(2)}>Add</button> }))

const mockDataWithStock = {
    id: '1',
    name: 'Camiseta 1',
    price: 100,
    discPerc: 0.9,
    onSale: true,
    stock: [
        { size: 'S', quantity: 2 },
        { size: 'M', quantity: 3 }
    ],
    season: '2025',
    category: 'Selecciones',
    img: '/img.jpg'
}

const mockDataNoStock = {
    id: '2',
    name: 'Camiseta 2',
    price: 80,
    discPerc: 1,
    onSale: false,
    stock: [],
    season: '2025',
    category: 'Selecciones',
    img: '/img2.jpg'
}

describe('ItemDetail Component - Optimized', () => {
    let addItemCart, deleteItemCart, itemCartStock

    const renderComponent = (data) =>
        render(
            <CartContext.Provider value={{ addItemCart, deleteItemCart, itemCartStock }}>
                <MemoryRouter>
                    <ItemDetail dataDetail={data} />
                </MemoryRouter>
            </CartContext.Provider>
        )

    beforeEach(() => {
        addItemCart = vi.fn()
        deleteItemCart = vi.fn()
        itemCartStock = vi.fn(() => [])
        Swal.fire.mockReset()
    })

    test('renders correctly with stock and price with discount', async () => {
        renderComponent(mockDataWithStock)

        expect(screen.getByText('$100')).toBeInTheDocument() // tachado
        expect(screen.getByText(`$${mockDataWithStock.price * mockDataWithStock.discPerc}`)).toBeInTheDocument()

        fireEvent.click(screen.getByText('Select Size'))
        fireEvent.click(screen.getByText('Add'))
        fireEvent.click(screen.getByText('Confirmar'))

        await waitFor(() => {
            expect(addItemCart).toHaveBeenCalledWith(mockDataWithStock, [{ size: 'M', quantity: 2 }])
            expect(Swal.fire).toHaveBeenCalledWith({
                title: 'Camiseta agregada!',
                icon: 'success',
                draggable: true
            })
        })
    })

    test('renders correctly without stock', () => {
        renderComponent(mockDataNoStock)

        expect(screen.getByText('No hay stock para esta camiseta')).toBeInTheDocument()
        expect(screen.getByText('Volver al menu')).toBeInTheDocument()
    })

    test('renders price without discount', () => {
        renderComponent(mockDataNoStock)
        expect(screen.getByText(`$${mockDataNoStock.price}`)).toBeInTheDocument()
    })

    test('Confirmar button disabled if no stock selected', () => {
        renderComponent(mockDataWithStock)
        expect(screen.getByText('Confirmar')).toBeDisabled()
    })

    test('delete item works with confirmation', async () => {
        Swal.fire.mockResolvedValueOnce({ isConfirmed: true })

        renderComponent(mockDataWithStock)

        fireEvent.click(screen.getByText('Select Size'))
        fireEvent.click(screen.getByText('Add'))
        fireEvent.click(screen.getByText('Eliminar'))

        await waitFor(() => {
            expect(deleteItemCart).toHaveBeenCalledWith(mockDataWithStock.id)
        })
    })

    test('delete item canceled does not call deleteItemCart', async () => {
        Swal.fire.mockResolvedValueOnce({ isConfirmed: false })

        renderComponent(mockDataWithStock)

        fireEvent.click(screen.getByText('Eliminar'))

        await waitFor(() => {
            expect(deleteItemCart).not.toHaveBeenCalled()
        })
    })
})
