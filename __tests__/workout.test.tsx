import { render, screen } from '@testing-library/react'
import WorkoutPage from '@/pages/workouts/[id]'
import workouts from './workouts.json'

describe('Home', () => {
  it('renders a workout grid', () => {
    render(<WorkoutPage workout={workouts[0]} />)
    const grid = screen.getByRole('workoutdetail')
    expect(grid).toBeInTheDocument()
  })
})
