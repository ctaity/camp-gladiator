import { render, screen } from '@testing-library/react'
import { Workout } from '@/types/workout'
import { WorkoutDetail } from '@/components/WorkoutDetail'

const workout: Workout = {
  description: 'Enjoy a fun and low impact workout with Kelsey. We will engage a full body workout and get your heart rate up!',
  thumbnail: 'https://cgcdn.s3.amazonaws.com/nation/users/UID-V1421773844UID-54be8c1417ad6.png',
  levelTag: 'beginner',
  media: 'https://virtual-library.s3.amazonaws.com/Week1-KelseySage.mp4',
  title: 'Endurance by Kelsey Sage',
  impactTag: 'low',
  id: '1',
  trainerId: '1',
  duration: 60
}

describe('WorkOutDetail', () => {
  it('renders a workout detail', () => {
    render(<WorkoutDetail workout={workout} />)
    const grid = screen.getByRole('workoutdetail')
    expect(grid).toBeInTheDocument()
    const thumbanail = screen.getByTestId('workoutdetail-thumbnail')
    expect(thumbanail).toBeInTheDocument()
    expect(thumbanail).toHaveAttribute('src', workout.thumbnail)
    expect(screen.getByTestId('workoutdetail-title')).toHaveTextContent(workout.title)
    expect(screen.getByTestId('workoutdetail-description')).toHaveTextContent(workout.description)
    expect(screen.getByTestId('workoutdetail-levelTag')).toHaveTextContent(workout.levelTag)
    expect(screen.getByTestId('workoutdetail-trainerId')).toHaveTextContent(workout.trainerId)
    expect(screen.getByTestId('workoutdetail-duration')).toHaveTextContent(`${workout.duration}`)
    expect(screen.getByTestId('workoutdetail-media')).toBeInTheDocument()
  })
})
