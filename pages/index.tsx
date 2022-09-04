import React from 'react'
import Head from 'next/head'
import type { NextPage, GetServerSideProps } from 'next'
import { Workout } from '@/types/workout'
import { WorkoutGrid } from '@/components/WorkoutGrid'
import { Layout } from '@/components/Layout'
import { getWorkouts } from '@/util/api'

interface HomePageProps {
  workouts: Workout[]
}

const Home: NextPage<HomePageProps> = ({ workouts }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Workouts</title>
        <meta name="description" content="Workouts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Workouts">
        <WorkoutGrid workouts={workouts} />
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const workouts = await getWorkouts()
  return { props: { workouts } }
}

export default Home
