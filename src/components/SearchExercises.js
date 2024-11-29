import React, { useState, useEffect } from "react";
import { Box, Button, button, Stack, TextField, Typography } from "@mui/material";
import {options,fetchData} from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'
const SearchExercises = ({setExercises, bodyPart,setBodyPart}) => {
    const [search,setSearch]=useState('')
    const [filteredExercises,setFilteredExercises]=useState([])
    const [exerciseList,setExerciseList]=useState([])
    useEffect(()=>{
        const fetchExercisesData=async ()=>{
           const exerciseList1=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options)
          console.log(exerciseList1)
           setExerciseList(exerciseList1)
        }
        fetchExercisesData()
    },[])
    const handleSearch=async ()=>{
        if(search){
        const exercises= await fetchData('https://exercisedb.p.rapidapi.com/exercises',options)
        console.log(exercises)
       const searchedExercises= exercises.filter((exercise)=>{
        console.log(exercise)
            return exercise.bodyPart.toLowerCase().includes(search.toLowerCase()) 
            || exercise.equipment.toLowerCase().includes(search.toLowerCase()) 
            || exercise.name.toLowerCase().includes(search.toLowerCase()) 
            || exercise.target.toLowerCase().includes(search.toLowerCase()) 
            
        })
        setFilteredExercises(searchedExercises)
        setExercises(searchedExercises)

        }
    }
  
  return (
    <Stack
      flexDirection="column !important"
      alignItems="center !important"
      p="20px"
      justifyContent="center !important"
      sx={{ minHeight: "100vh" }}
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "20px" }, textAlign: "center" }}
      >
        Awesome exercises you should know
      </Typography>
      <Box mb="37px" sx={{display:'flex', flexDirection:'row',justifyContent:'center'}}>
        <TextField
              sx={{input:{fontWeight: '700', border:'none', borderRadius:'4px'}, width:'500px', backgroundColor:'#fff',borderRadius:'40px'}}

          height="76px"
          value={search}
          placeholder="Search Exercises"
          onChange={(e) => {setSearch(e.target.value)}}
          type="text"
        ></TextField>
        <Button className="search-btn" onClick={handleSearch} variant="contained" color="error" sx={{width:'175px', height:'55px'}}>Search</Button>
      </Box>
      <Box>
        <HorizontalScrollBar data={exerciseList} setExercises={setExercises}/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
