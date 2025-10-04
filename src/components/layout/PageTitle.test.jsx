import { render, screen } from '@testing-library/react'
import PageTitle from './PageTitle'

describe('PageTitle Component', () => {
    test('renders Page Title correctly', () => {
        render(<PageTitle />)

        const pageTitleText = screen.getByText(/Bienvenido a GoalStreet! Tu mejor pagina para comprar camisetas de tus equipos favoritos/i)

        expect(pageTitleText).toBeInTheDocument()
    })
})