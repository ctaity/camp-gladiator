import { render, screen } from '@testing-library/react'
import { Layout } from '@/components/Layout'

describe('Layout', () => {
  it('renders main and footer', () => {
    // eslint-disable-next-line react/no-children-prop
    render(<Layout title='test'/>)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('footer')).toBeInTheDocument()
  })
})
