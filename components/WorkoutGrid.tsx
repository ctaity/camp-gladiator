// import styles from './WorkoutGrid.module.scss'
import React, { ReactElement } from 'react'
import { Workout } from '@/types/workout'
import { WorkoutCard } from '@/components/WorkoutCard'

interface WokOutGridProps {
  workouts: Workout[]
}

export const WorkoutGrid = ({ workouts }: WokOutGridProps): ReactElement => (
  <div role='workoutgrid' className='workoutgrid grid h-full sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4'>
    {workouts.map((workout) => <WorkoutCard key={workout.id} {...workout} />)}
  </div>
)
