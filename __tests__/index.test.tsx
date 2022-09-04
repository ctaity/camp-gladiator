import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a workout grid', () => {
    render(<Home workouts={[]} />)
    const grid = screen.getByRole('workoutgrid')
    expect(grid).toBeInTheDocument()
  })
})
