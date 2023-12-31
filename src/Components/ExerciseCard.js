import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Button, Typography} from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}   onClick={() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
      <Stack direction='row'>
        <Button variant='contained' color='secondary' sx={{ml: '21px', color: '#fff', backgroundColor: '#ffa9a9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
            {exercise.bodyPart}
        </Button>
        <Button variant='contained' color='secondary' sx={{ml: '21px', color: '#fff', backgroundColor: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
            {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight='bold' mt="11px" pb="10px" textTransform='capitalize' fontSize='22px'>
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard
