import _data from './workouts.json'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Workout } from '@/types/workout'
const workouts: Workout[] = _data

export default function handler (_: NextApiRequest, res: NextApiResponse<Workout[]>): void {
  res.status(200).json(workouts)
}
