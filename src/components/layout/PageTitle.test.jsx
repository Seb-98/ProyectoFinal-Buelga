import { render, screen } from '@testing-library/react'
import PageTitle from './PageTitle'

describe('PageTitle Component', () => {
    test('renders Page Title correctly', () => {
        render(<PageTitle />)

        const pageTitleText = screen.getByText(/Bienvenido a GoalStreet! Los mejores precios!/i)

        expect(pageTitleText).toBeInTheDocument()
    })
})