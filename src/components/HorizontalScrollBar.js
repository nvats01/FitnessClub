import React, { useContext, useState } from 'react'
import {Box, ClickAwayListener, Typography} from '@mui/material'
import Bodypart from './Bodypart'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import { fetchData, options } from '../utils/fetchData'


const RightArrow= () =>{
    const {scrollNext} = useContext(VisibilityContext)

    return (
        <Typography onClick={()=> scrollNext()} className='right-arrow'>
        <img src={RightArrowIcon} alt="rightArrow"></img>
        </Typography>
    )
}
const LeftArrow= () =>{
    const {scrollNext} = useContext(VisibilityContext)

    return (
        <Typography onClick={()=> scrollNext()} className='left-arrow'>
        <img src={LeftArrowIcon} alt="leftArrow"></img>
        </Typography>
    )
}
const clickHandler=async (item,setExercises,setSelectedBodyPart)=>{
  console.log(item);
  setSelectedBodyPart(item);
 const res= await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${item}?limit=10&offset=0`,options)
 setExercises(res)

}
const HorizontalScrollBar = ({data,setExercises}) => {
    const [selectedBodyPart,setSelectedBodyPart]=useState(null)
    console.log(data)
  return (
   <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {
        data.map((item)=>(
           <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            >
                <Bodypart bodyPart={item} isSelected={selectedBodyPart===item} onClick={()=>{clickHandler(item,setExercises,setSelectedBodyPart)}}/>
           </Box>
        ))
      }
    </ScrollMenu>
  )
}

export default HorizontalScrollBar
