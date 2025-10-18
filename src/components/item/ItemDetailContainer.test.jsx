import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'
import { getSingleItem } from '../../service/firebase'

// 🔹 Mockeamos el módulo completo de firebase
vi.mock('../../service/firebase', () => ({
    getSingleItem: vi.fn()
}))

// 🔹 Mockeamos los componentes hijos para simplificar el test
vi.mock('./ItemDetail', () => ({
    default: ({ dataDetail }) => (
        <div data-testid="item-detail">
            {dataDetail?.name ? dataDetail.name : 'Sin datos'}
        </div>
    )
}))

vi.mock('../Loader', () => ({
    default: () => <div data-testid="loader">Cargando...</div>
}))

describe('ItemDetailContainer', () => {
    const mockItem = {
        id: '1',
        name: 'Camiseta Argentina 94',
        price: 125000,
        img: '/img/argentina-94.webp'
    }

    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('muestra Loader mientras carga', async () => {
        // getSingleItem nunca resuelve → simula la carga
        getSingleItem.mockImplementation(() => new Promise(() => { }))

        render(
            <MemoryRouter initialEntries={['/detail/1']}>
                <Routes>
                    <Route path="/detail/:id" element={<ItemDetailContainer />} />
                </Routes>
            </MemoryRouter>
        )

        expect(screen.getByTestId('loader')).toBeInTheDocument()
    })

    test('renderiza ItemDetail con los datos recibidos', async () => {
        getSingleItem.mockResolvedValueOnce(mockItem)

        render(
            <MemoryRouter initialEntries={['/detail/1']}>
                <Routes>
                    <Route path="/detail/:id" element={<ItemDetailContainer />} />
                </Routes>
            </MemoryRouter>
        )

        // Esperamos a que desaparezca el loader y aparezca el detalle
        await waitFor(() => {
            expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
            expect(screen.getByTestId('item-detail')).toHaveTextContent('Camiseta Argentina 94')
        })

        expect(getSingleItem).toHaveBeenCalledWith('1', 'products')
    })

    test('maneja errores en la llamada de getSingleItem', async () => {
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { })
        getSingleItem.mockRejectedValueOnce(new Error('Error de red'))

        render(
            <MemoryRouter initialEntries={['/detail/1']}>
                <Routes>
                    <Route path="/detail/:id" element={<ItemDetailContainer />} />
                </Routes>
            </MemoryRouter>
        )

        await waitFor(() => {
            expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
            expect(screen.getByTestId('item-detail')).toHaveTextContent('Sin datos')
        })

        expect(consoleSpy).toHaveBeenCalled()
        consoleSpy.mockRestore()
    })
})
