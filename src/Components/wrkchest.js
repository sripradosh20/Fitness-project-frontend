import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url('https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZXN0JTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D') no-repeat center center fixed;
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
    title: 'Incline Bench Press',
    target: 'Upper Chest',
    video: 'https://youtube.com/embed/cq-4gME3IFY?si=WYZW3xOd0xj5mEhS',
  },
  {
    title: 'Flat Bench Press',
    target: 'Middle Chest',
    video: 'https://youtube.com/embed/0cXAp6WhSj4?si=qSFt13HF18m9niDI',
  },
  {
    title: 'Decline Bench Press',
    target: 'Lower Chest',
    video: 'https://youtube.com/embed/wQIowhVvLKQ?si=P7f0Gj5M3M4-3bur',
  },
  {
    title: 'Cable Crossovers',
    target: 'Inner Chest',
    video: 'https://youtube.com/embed/tGXIQR89-JE?si=nwRzqYYkj2HJ4rtN',
  },
  {
    title: 'Chest Flyes',
    target: 'Whole Chest',
    video: 'https://youtube.com/embed/g3T7LsEeDWQ?si=-GzLjN9n0AboIeXD',
  },
  {
    title: 'Push-Ups',
    target: 'Overall Chest',
    video: 'https://youtube.com/embed/y7PBQ2fYbxY?si=2uml_imRfVLBC2zU',
  },
];

const Wrkchest = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header>Chest Workouts</Header>
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

export default Wrkchest;