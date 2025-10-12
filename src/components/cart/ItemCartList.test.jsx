import { render, screen } from '@testing-library/react'
import ItemCartList from './ItemCartList'

// mockear ItemCart para simplificar el test
vi.mock('./ItemCart', () => ({
    default: ({ data }) => <div>{data.name}</div>
}));

const mockData = [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
]

describe('ItemCartList Component', () => {
    test('renders item cart list with products', () => {
        render(<ItemCartList dataCartList={mockData} />)

        // verifica que haya dos productos
        const products = screen.getAllByText(/Product/)
        expect(products).toHaveLength(2)

        // verifica que aparezcan los nombres específicos
        expect(screen.getByText('Product 1')).toBeInTheDocument()
        expect(screen.getByText('Product 2')).toBeInTheDocument()
    })

    test('renders empty list without crashing', () => {
        render(<ItemCartList dataCartList={[]} />)
    })
})
