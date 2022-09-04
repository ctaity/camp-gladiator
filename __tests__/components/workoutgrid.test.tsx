import { render, screen } from '@testing-library/react'
import { WorkoutGrid } from '@/components/WorkoutGrid'
import workouts from '../workouts.json'

describe('WorkOutDetail', () => {
  it('renders workout cards', () => {
    render(<WorkoutGrid workouts={workouts} />)
    const cards = screen.getAllByRole('workoutcard')
    expect(workouts.length).toBe(cards.length)
  })
  it('renders 0 workout cards', () => {
    render(<WorkoutGrid workouts={[]} />)
    const grid = screen.getByRole('workoutgrid')
    expect(grid).toBeInTheDocument()
    expect(screen.queryByRole('workoutcard')).toBeNull()
  })
})
