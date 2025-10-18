import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Item from './Item'

describe('Item Component', () => {
    let mockData

    beforeEach(() => {
        mockData = {
            id: '1',
            name: 'Camiseta Argentina',
            img: '/img.jpg',
            price: 100,
            onSale: false,
            discPerc: 0.8,
            category: 'Selecciones',
            season: '1994'
        }
    })

    const renderItem = (data = mockData) => {
        render(
            <MemoryRouter>
                <Item dataShirt={data} />
            </MemoryRouter>
        )
    }

    test('renders basic info correctly', () => {
        renderItem()

        expect(screen.getByText(mockData.name)).toBeInTheDocument()
        expect(screen.getByText(`$${mockData.price}`)).toBeInTheDocument()
        expect(screen.getByText(`Temporada: ${mockData.season}`)).toBeInTheDocument()
        expect(screen.getByText(mockData.category)).toBeInTheDocument()
    })

    test('shows discount price when onSale is true', () => {
        renderItem({ ...mockData, onSale: true })

        expect(screen.getByText(`$${mockData.price}`)).toHaveStyle({ textDecorationLine: 'line-through' })
        expect(screen.getByText(`$${mockData.price * mockData.discPerc}`)).toHaveStyle({ color: 'rgb(255, 0, 0)' })
    })

    test('applies and removes shadow on hover', () => {
        renderItem()
        const card = screen.getByRole('img', { name: mockData.name }).closest('div')

        fireEvent.mouseOver(card)
        expect(card).toHaveStyle({ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.55)' })

        fireEvent.mouseLeave(card)
        expect(card).toHaveStyle({ boxShadow: '' })
    })

    test('the "Comprar" button has the correct link', () => {
        renderItem()
        const link = screen.getByRole('link', { name: /comprar/i })
        expect(link).toHaveAttribute('href', `/detail/${mockData.id}`)
    })
})
