import React,{ useEffect} from 'react';
import { useWorkoutContext } from '../hooks/useWorkoutContext';

import WorkoutDetails from '../components/WorkoutDetails';
import Workoutform from '../components/Workoutform';

const Home = () => {

  const{ workouts, dispatch} =useWorkoutContext()

  useEffect(()=>{
   const fetchWorkouts = async ()=>{
    const response= await fetch('/api/workouts')
    const json = await response.json()

    if(response.ok){
    dispatch({type:'SET_WORKOUTS', payload:json})
    }

   }

  fetchWorkouts()
  },[])

  return (
    <div className='home'>
      <div className="workouts">{workouts && workouts.map((workout)=>(
        <WorkoutDetails key={workout._id} workout={workout}/>


      ))}</div>
      <Workoutform />
    </div>
  )
}

export default Home
