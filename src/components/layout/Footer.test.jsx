import { render, screen } from '@testing-library/react'
import Footer from './Footer'

// Test suite (describe agrupa tests relacionados)
describe('Footer Component', () => {
  test('renders Footer text correctly', () => {
    // 1️⃣ Renderizamos el componente
    render(<Footer />)

    // 2️⃣ Buscamos el texto
    const footerText = screen.getByText(/© 2025 Copyright: All rights reserved/i)

    // 3️⃣ Afirmamos que está en el documento
    expect(footerText).toBeInTheDocument()
  })

  test('has correct classes for styling', () => {
    render(<Footer />)
    const footerDiv = screen.getByText(/© 2025/i).closest('div')

    // Verificamos que tenga las clases Bootstrap
    expect(footerDiv).toHaveClass('bg-dark')
    expect(footerDiv).toHaveClass('text-white')
    expect(footerDiv).toHaveClass('text-center')
  })
})
