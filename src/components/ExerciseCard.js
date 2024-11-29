import React from 'react'
import Card from '@mui/material/Card';
import { Button, Stack,Typography } from '@mui/material';
import {Link} from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
    console.log(exercise)
  return (
    <Link className="exerciseCard" to={`/exercise/${exercise.id}`} style={{textDecoration:'none'}}>
      <Card
                sx={{
                    borderTop: '2px solid red', // Border on top
                    borderBottom: '2px solid red', // Border on bottom
                    boxShadow: 'none', // Remove card shadow if needed
                    padding: '16px', // Optional: Add some padding
                }}
            >
     <img src={exercise.gifUrl} alt={exercise.name} Loading="lazy"></img>
     <Stack direction="row">
        <Button sx={{ml:'21px', color:'#fff', background:'#ffa9a9', fontSize:'14px',borderRadius:'20px',textTransform:'captilaize'}}>
        {exercise.bodyPart}
        </Button>
        <Button sx={{ml:'21px', color:'#fff', background:'#fcc757', fontSize:'14px',borderRadius:'20px',textTransform:'captilaize'}}>
        {exercise.target}
        </Button>
     </Stack>
     <Typography  ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px">
        {exercise.name}
     </Typography>
     </Card>
    </Link>
  )
}

export default ExerciseCard
