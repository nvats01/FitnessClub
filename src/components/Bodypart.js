import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png'
import { fetchData,options } from '../utils/fetchData';
const Bodypart = ({bodyPart, isSelected, onClick}) => {
  const [bodyPartImg, setBodyPartImg]=useState("") 
  useEffect(()=>{
 const fun= async ()=>{
  const res= await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10&offset=0`,options)
setBodyPartImg(res[0].gifUrl)
}
fun()
  })
    const [isClicked,setIsClicked]=useState(false)
    console.log(isSelected)
  return (
    <Card sx={{width:'300px',height:'300px', display:'flex',flexDirection:'column',alignItems:'center',border:isSelected? '2px solid red':'none', '&:hover': {
        cursor: 'pointer', // Changes the cursor to a pointer when hovering
      }}} onClick={onClick} >
        <img src={bodyPartImg} alt="dumbbell" style={{width:"80px",height:"80px"}}/>
        <Typography variant="h5">
            {bodyPart}
        </Typography>
    </Card>
  )
}

export default Bodypart
