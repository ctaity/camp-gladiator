// import styles from './WorkoutCard.module.scss'
import React, { ReactElement } from 'react'
import { Workout } from '@/types/workout'
import Link from 'next/link'

export const WorkoutCard = ({ id, title, description }: Workout): ReactElement => (
    <Link href={`/workouts/${id}`}>
        <a>
          <div role="workoutcard" className="workoutcard card h-64 m-2 p-2">
            <h2 className="text-2xl font-bold" >{title}</h2>
            <p className="text-lg mt-2">{description}</p>
          </div>
        </a>
    </Link>
)
