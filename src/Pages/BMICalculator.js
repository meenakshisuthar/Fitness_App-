import React, { useState } from 'react';
import { TextField, Stack, Typography, Button } from '@mui/material';
import ExerciseRecommendations from './ExerciseRecommendations';

const BMICalculator = () => {
  // const [showExercise, setShowExercise] =  useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <Stack  mb="72px" alignItems="center" mt="37px" justifyContent="center" p="20px" gap='20px'>
      <h2>BMI Calculator</h2>
      <TextField
          height="76px"
          placeholder="Enter your weight (kg)"
          type="number"
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '500px', xs: '250px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
           }}
           value={weight}
           onChange={(e) => setWeight(e.target.value)}
          />  
      <TextField
          height="76px"
          placeholder="Enter your height (cm)"
          type="number"
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '500px', xs: '250px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
           }}
           value={height}
           onChange={(e) => setHeight(e.target.value)}
          />  
            
      <Button onClick={calculateBMI} 
       variant='contained' color='secondary'
       sx={{
         bgcolor: 'var(--primary-color)',
         color: '#fff',
         textTransform: 'none',
         width: { lg: '175px', xs: '80px' },
         fontSize: { lg: '20px', xs: '14px' },
         height: '56px',
       }}
       >
        Calculate BMI
       </Button>
      {bmi && (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
          <Typography fontWeight="300" mb="50px" textAlign="center" sx={{ fontSize: { lg: '30px', xs: '15px' } }}>
            Your BMI: {bmi}</Typography>
          <ExerciseRecommendations bmi={parseFloat(bmi)} />
        </Stack>
      )}
    </Stack>
  );
};

export default BMICalculator;
