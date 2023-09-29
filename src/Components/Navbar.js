import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/system'
import Logo from '../assets/images/dumble.png'

const Navbar = () => {

  return (
    <Stack direction='row' px="20px" sx={{gap: { sm: '60px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}}}>
      <Link to='/'>
        <img src={Logo} alt='logo' className='logo-img' style={{ width: '40px', height: '40px' }}/>
      </Link>
      <Stack direction='row' gap="40px" fontSize='24px' alignItems='flex-end'>
        <Link to='/' style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid var(--primary-color)', transition: 'border-color 0.3s ease-in-out' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid transparent', transition: 'border-color 0.3s ease-in-out'}}>Exercises</a>
        <Link to="/BmiCalculator" style={{ textDecoration: 'none', color: 'black', borderBottom: '3px solid transparent', transition: 'border-color 0.3s ease-in-out' }}>BMI Calculator</Link>
      </Stack>
    </Stack>
  )
}

export default Navbar
