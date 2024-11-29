import React from 'react'
import './App.css'

import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material'
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';

const App = () => {
  return (

<div>
    <Navbar/>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
    </Routes>
    <Footer/>

</div>
  )
}

export default App
