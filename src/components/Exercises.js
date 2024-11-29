import React,{useState, useEffect} from 'react'
import { Pagination } from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart, setBodyPart}) => {
  console.log(exercises)
  return (
    <Box id="exercises">
      {
      exercises && exercises.length!==0 &&
      
      <Typography variant='h3'>
        Showing results
      </Typography>

}
      <Stack spacing={2} direction="row" flexWrap="wrap" justifyContent="center">
        {
          exercises.map((exercise,index)=>(
          <ExerciseCard exercise={exercise}/>
          ))
        }
      </Stack>
    </Box>
  )
}

export default Exercises
