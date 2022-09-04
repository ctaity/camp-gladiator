import { Workout } from '@/types/workout'

const API_ENDPOINT = process.env.API_ENDPOINT ?? 'http://localhost:3000/api'

export const getWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch(`${API_ENDPOINT}/workouts`)
  const data = await res.json()
  return data
}

export const getWorkoutsById = async (id: string): Promise<Workout> => {
  const res = await fetch(`${API_ENDPOINT}/workouts/${id}`)
  const data = await res.json()
  return data
}
