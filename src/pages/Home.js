import React,{useState,useRef} from 'react'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
const Home = () => {
  const [bodyPart, setBodyPart]=useState('all')
  const [exercises, setExercises]=useState([])
  const exerciseRef = useRef(null);
  const handleScroll = () => {
    exerciseRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <HeroBanner handleScroll={handleScroll}/>
      <div ref={exerciseRef}>
      <SearchExercises
      
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}/>
      <Exercises
      exercises={exercises}
      setExercises={setExercises}
      bodyPart={bodyPart}     
      setBodyPart={setBodyPart}/>  
      </div>
    </div>
  )
}

export default Home
