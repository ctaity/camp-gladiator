import _data from './workouts.json'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Workout } from '@/types/workout'
const workouts: Workout[] = _data

export default function handler (req: NextApiRequest, res: NextApiResponse<Workout | string>): void {
  const { id } = req.query
  const workout = workouts.find((workout) => workout.id === id)
  if (workout == null) { return res.status(404).send('Workout not found') }
  res.status(200).json(workout)
}
