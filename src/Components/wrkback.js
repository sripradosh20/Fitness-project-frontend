import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url("https://media.istockphoto.com/id/504637880/vector/vector-lettering-vintage-typography-poster-with-man.jpg?s=612x612&w=0&k=20&c=cIv84v_uIlKcjy4HP3NTxRUL3aafJ3dM4XI8ZSaRQRA=") no-repeat center center fixed;
    background-size: cover;
    color: white;
    font-family: 'Arial', sans-serif;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(18, 18, 18, 0.8); /* Adding transparency for readability */
  border-radius: 10px;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: #e0e0e0;
`;

const WorkoutContainer = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const WorkoutTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.8rem;
  color: #ff6f61;
`;

const TargetArea = styled.p`
  margin-bottom: 20px;
  font-style: italic;
  color: #bdbdbd;
`;

const Video = styled.div`
  background-color: #333;
  width: 100%;
  padding-top: 177.78%; /* 9:16 Aspect Ratio */
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
  }
`;

const workouts = [
  {
    title: 'Pull-Ups',
    target: 'Upper Back',
    video: 'https://youtube.com/embed/ZPG8OsHKXLw?si=UwJRsqIOOMwLfzt7',
  },
  {
    title: 'Lat Pulldowns',
    target: 'Lats',
    video: 'https://youtube.com/embed/hnSqbBk15tw?si=YJfOugcVJ29Ear2g',
  },
  {
    title: 'Bent Over Rows',
    target: 'Middle Back',
    video: 'https://youtube.com/embed/Nqh7q3zDCoQ?si=vJ5XySRb6Mfv8C-s',
  },
  {
    title: 'Seated Cable Rows',
    target: 'Middle Back',
    video: 'https://youtube.com/embed/G18ysBYu5Mw?si=K-zP3JCrXjTVNBlX',
  },
  {
    title: 'Deadlifts',
    target: 'Lower Back',
    video: 'https://youtube.com/embed/8np3vKDBJfc?si=1bl6c-NuM0xBqcyS',
  },
  {
    title: 'Face Pulls',
    target: 'Upper Back and Rear Delts',
    video: 'https://youtube.com/embed/DVxfKB0BnlY?si=D09RMIWC7a1Wdjvg',
  },
];

const Wrkback = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header>Back Workouts</Header>
      {workouts.map((workout, index) => (
        <WorkoutContainer key={index}>
          <WorkoutTitle>{workout.title}</WorkoutTitle>
          <TargetArea>Targets: {workout.target}</TargetArea>
          <Video>
            <iframe 
              src={workout.video} 
              title={workout.title} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            />
          </Video>
        </WorkoutContainer>
      ))}
    </Container>
  </>
);

export default Wrkback;