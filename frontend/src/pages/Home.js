import { useEffect }from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext'

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
<<<<<<< HEAD
     
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/workouts`,{
        headers:{
=======
      
      const response = await fetch('https://mern-nhxb.onrender.com/api/workouts',{
      headers:{
>>>>>>> 1d50269ab118a12ea2b0d9690f57c91e0c5784a5
          'Authorization': `Bearer ${user.token}`
        }
      })
    
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
    if(user){
      fetchWorkouts()
    }
}, [dispatch], user)

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
