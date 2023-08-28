import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/gym-02.png'


const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '180px', sx: '70px'}, ml: { sm: '50px'}}} position='relative' p='20px'>
      <Typography color="#6f55f2" fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography fontWeight='700' sx={{ fontSize: { lg: '44px', xs: '40px'}}}>
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography fontSize='24px' lineHeight='50px' mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant='contained' color='primary' href='#exercises' sx={{ backgroundColor: 'var(--primary-color)', padding: '12px'}}> Explore Exercises</Button>
      <Typography mb='23px' mt='55px' fontWeight='600' fontSize='200px' color='var(--primary-color)' sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none'}}}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
