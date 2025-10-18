import { render, screen, fireEvent } from '@testing-library/react'
import ItemCount from './ItemCount'

describe('ItemCount Component', () => {
    const mockOnAdd = vi.fn()

    const renderItemCount = (props = {}) => {
        const defaultProps = { stock: 5, onAdd: mockOnAdd, sizeSelect: 'M' }
        return render(<ItemCount {...defaultProps} {...props} />)
    }

    beforeEach(() => {
        mockOnAdd.mockClear()
    })

    test('renders with initial count 0', () => {
        renderItemCount()
        expect(screen.getByText('0')).toBeInTheDocument()
    })

    test('increases and decreases count correctly', () => {
        renderItemCount()
        const plus = screen.getByText('+')
        const minus = screen.getByText('-')
        const count = screen.getByText('0')

        fireEvent.click(plus)
        expect(count.textContent).toBe('1')

        fireEvent.click(minus)
        expect(count.textContent).toBe('0')
    })

    test('calls onAdd with the count value when "Agregar" is clicked', () => {
        renderItemCount()
        const plus = screen.getByText('+')
        const addButton = screen.getByText('Agregar')

        fireEvent.click(plus)
        fireEvent.click(addButton)

        expect(mockOnAdd).toHaveBeenCalledWith(1)
    })

    test('disables + and - buttons when no size is selected', () => {
        renderItemCount({ sizeSelect: '' })
        expect(screen.getByText('+')).toBeDisabled()
        expect(screen.getByText('-')).toBeDisabled()
    })
})
