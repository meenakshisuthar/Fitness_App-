import React from 'react';


const exerciseData = [
  {
    name: 'Cardio Workout',
    description: 'Engage in 30 minutes of brisk walking, jogging, or cycling.',
    bmiRange: [0, 18.5],
  },
  {
    name: 'Strength Training',
    description: 'Perform bodyweight exercises like push-ups, squats, and planks.',
    bmiRange: [18.5, 24.9],
  },
  {
    name: 'High-Intensity Interval Training (HIIT)',
    description: 'Try a high-intensity interval training session for improved fitness.',
    bmiRange: [25, 100],
  },
];

const ExerciseRecommendations = ({bmi}) => {
  
  const recommendedExercises = exerciseData.filter(
    (exercise) => bmi >= exercise.bmiRange[0] && bmi <= exercise.bmiRange[1]
  );

  return (
    <div>
      <h3>Exercise Recommendations</h3>
      {recommendedExercises.length === 0 ? (
        <p>No specific exercises recommended for your BMI range.</p>
      ) : (
        <div>
        <ul>
          {recommendedExercises.map((exercise, index) => (
            <li key={index}>
              <strong>{exercise.name}</strong>: {exercise.description}
            </li>
          
          ))}
        </ul>
        
        </div> 
      )}
    </div>
  );
};

export default ExerciseRecommendations;
