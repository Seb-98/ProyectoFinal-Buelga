import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ItemList from './ItemList'

describe('ItemList Component', () => {
  const mockData = [
    { id: '1', name: 'Argentina 94', img: '/images/argentina.webp', price: 125000 },
    { id: '2', name: 'Brasil 02', img: '/images/brasil.webp', price: 130000 }
  ]

  test('renders a list of items', () => {
    render(
      <MemoryRouter>
        <ItemList dataItemList={mockData} />
      </MemoryRouter>
    )

    expect(screen.getByText('Argentina 94')).toBeInTheDocument()
    expect(screen.getByText('Brasil 02')).toBeInTheDocument()
  })

  test('renders empty list without crashing', () => {
    render(
      <MemoryRouter>
        <ItemList dataItemList={[]} />
      </MemoryRouter>
    )

    expect(screen.queryByText('Argentina 94')).not.toBeInTheDocument()
  })
})
