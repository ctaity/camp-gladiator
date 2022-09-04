import React, { ReactElement } from 'react'
import Head from 'next/head'
import { Workout } from '@/types/workout'
import type { NextPage, GetServerSideProps } from 'next'
import { WorkoutDetail } from '@/components/WorkoutDetail'
import { Layout } from '@/components/Layout'
import { getWorkoutsById } from '@/util/api'
import { ParsedUrlQuery } from 'querystring'

interface WorkoutPageProps {
  workout: Workout
}

const WorkoutPage: NextPage<WorkoutPageProps> = ({ workout }: WorkoutPageProps): ReactElement => {
  return (
    <>
      <Head>
        <title>Workout Detail Page</title>
        <meta name="description" content="Workout Detail Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Details">
          <WorkoutDetail workout={workout}/>
      </Layout>
    </>)
}

interface Params extends ParsedUrlQuery { id: string}

export const getServerSideProps: GetServerSideProps<WorkoutPageProps> = async (context) => {
  try {
    const { id } = context.params as Params
    const workout = await getWorkoutsById(id)
    return { props: { workout } }
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}

export default WorkoutPage
