import React,{useState,useEffect} from 'react'
import {Box, button,Stack,TextField,Typography} from '@mui/material'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import Detail from '../components/Detail'
import { useParams } from 'react-router-dom'
import { fetchData, options ,youtubeOptions} from '../utils/fetchData'
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos]=useState([])
  const {id}= useParams()

  useEffect(()=>{
    const fetchExercisesDetail= async () =>{
      console.log('Exercise11')
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com'
      const exerciseDetailData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,options)
      console.log(exerciseDetailData)
      setExerciseDetail(exerciseDetailData)
      const exerciseVideosData= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)
      const equipmentExercisesData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.equipment}`,options)
    }
    fetchExercisesDetail()
  },[id])
  return (
  <Box>
    <Detail exerciseDetail={exerciseDetail}/>
    <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
    <SimilarExercises/>

  </Box>
  )
}

export default ExerciseDetail
