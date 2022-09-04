import React, { ReactElement } from 'react'
import { Workout } from '@/types/workout'

interface WorkoutDetailProps {
  workout: Workout
}

export const WorkoutDetail = ({ workout }: WorkoutDetailProps): ReactElement => (

   <div role='workoutdetail' className="workoutdetail min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl bg-yellow-300 rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
            <div className="md:flex items-center -mx-10">
                <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                    <div className="relative">
                        <img data-testid="workoutdetail-thumbnail" src={workout.thumbnail} className="w-full relative z-10" alt=""/>
                        <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-10">
                    <div className="mb-10">
                        <h1 data-testid="workoutdetail-title" className="font-bold text-2xl mb-5">{workout.title}</h1>
                        <p data-testid="workoutdetail-description" className="text-sm">{workout.description}</p>
                    </div>
                    <div className="mb-10 font-bold">
                        <p className="text-sm" data-testid="workoutdetail-levelTag">levelTag: <span className='font-normal'>{workout.levelTag}</span></p>
                        <p className="text-sm" data-testid="workoutdetail-impactTag">impactTag: <span className='font-normal'>{workout.impactTag}</span></p>
                        <p className="text-sm" data-testid="workoutdetail-trainerId">trainerId: <span className='font-normal'>{workout.trainerId}</span></p>
                    </div>
                    <div>
                        <div data-testid="workoutdetail-duration" className="inline-block align-bottom mr-5">
                            <span className="font-bold text-5xl leading-none align-baseline">Duration: </span>
                            <span className="font-bold text-5xl leading-none align-baseline">{workout.duration}</span>
                            <span className="text-2xl leading-none align-baseline">min</span>
                        </div>
                    </div>
                    <div data-testid="workoutdetail-media" className='pt-10'>
                        <video controls>
                            <source src={workout.media} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
