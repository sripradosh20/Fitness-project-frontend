import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url('https://plus.unsplash.com/premium_photo-1661582307304-714f35ceab79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNob3VsZGVyJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D') no-repeat center center fixed;
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
    title: 'Overhead Press',
    target: 'Shoulders',
    video: 'https://youtube.com/embed/OLePvpxQEGk?si=-bC86NyCqbo3Mhv4',
  },
  {
    title: 'Lateral Raises',
    target: 'Side Delts',
    video: 'https://youtube.com/embed/JIhbYYA1Q90?si=FKRGxXYaccPP9WEE',
  },
  {
    title: 'Front Raises',
    target: 'Front Delts',
    video: 'https://youtube.com/embed/NdQE5Fhfqn4?si=kd6AqooHHB5zrq68',
  },
  {
    title: 'Rear Delt Flyes',
    target: 'Rear Delts',
    video: 'https://youtube.com/embed/P5CXx_jgTDE?si=H9NZ2Mrx9y-gzl66',
  },
  {
    title: 'Arnold Press',
    target: 'Shoulders',
    video: 'https://youtube.com/embed/ppVR9oF32K0?si=0_u4XaFRColbjHJ6',
  },
  {
    title: 'Upright Rows',
    target: 'Shoulders and Traps',
    video: 'https://youtube.com/embed/AWsGWt-VMl8?si=E7H1MTHHz6ZwmNCC',
  },
];

const Wrksholder = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header>Shoulder Workouts</Header>
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

export default Wrksholder;