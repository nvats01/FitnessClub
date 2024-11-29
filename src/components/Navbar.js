import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
import Logo from '../assets/images/Logo.png'
import '../App.css'
const Navbar = () => {
  return (
    <Stack direction="row" spacing="100px" justify-content="space-between" marginTop="10px">
        <Link to="/">
         <img src={Logo} alt="logo"/>
       </Link>
    <Stack direction="row" spacing={2} fontSize="24px" alignItems="flex-end" >
       
       <Link className="nav-link" to="/home">
         Home
       </Link>
       <Link  className="nav-link" to="/exercises">
       Exercises
       </Link>
    </Stack>
    </Stack>
  )
}

export default Navbar
