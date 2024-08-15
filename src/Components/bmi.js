import React, { useState } from 'react';
import './bmi.css';
import vd from '../Assets/videos/videoplayback.mp4';
const BmiCalculator = () => {
  const [height, setHeight] = useState(182);
  const [weight, setWeight] = useState(82);
  const [bmi, setBmi] = useState(24.8);
  const [bmiCategory, setBmiCategory] = useState('Normal');
  const [resultBg, setResultBg] = useState({
    background: 'linear-gradient(to bottom right, #4FD24D, #4CA456)',
  });

  const calculateBmi = () => {
    const h = height / 100;
    const w = weight;
    let bmiValue = w / (h * h);
    bmiValue = bmiValue.toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setBmiCategory('Underweight');
      setResultBg({ background: 'linear-gradient(to bottom right, #27939D, #07658F)' });
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBmiCategory('Normal');
      setResultBg({ background: 'linear-gradient(to bottom right, #4FD24D, #4CA456)' });
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBmiCategory('Overweight');
      setResultBg({ background: 'linear-gradient(to bottom right, #EF7532, #DC3A26)' });
    } else {
      setBmiCategory('Obese');
      setResultBg({ backgroundColor: 'red' });
    }
  };

  const renderDietButtons = () => {
    let dietUrl = '';
    let personalDietUrl = '';
    switch (bmiCategory) {
      case 'Underweight':
        dietUrl = 'https://www.vbafitness.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-01-at-4.46.24-PM-1.png';
        personalDietUrl = 'https://www.example.com/underweight-personal-diet';
        break;
      case 'Normal':
        dietUrl = 'https://miro.medium.com/v2/resize:fit:1094/0*IRjI-XT81v1TmAXU.png';
        personalDietUrl = 'https://www.example.com/normal-personal-diet';
        break;
      case 'Overweight':
        dietUrl = 'https://miro.medium.com/v2/resize:fit:1094/0*IRjI-XT81v1TmAXU.png';
        personalDietUrl = 'https://www.example.com/overweight-personal-diet';
        break;
      case 'Obese':
        dietUrl = 'https://www.olivaclinic.com/wp-content/uploads/2024/05/1000-Calorie-Diet-Plan.jpg';
        personalDietUrl = 'https://www.example.com/obese-personal-diet';
        break;
    }

    return (
      <div className="diet-button-container">
        <a href={dietUrl} target="_blank" rel="noopener noreferrer" className="diet-button">
          Basic Diet
        </a>
        <a href={personalDietUrl} target="_blank" rel="noopener noreferrer" className="diet-button">
          Personal Diet
        </a>
      </div>
    );
  };

  return (
    <div className="bmi-page-container">
      <div className="background-video-container">
        <video autoPlay muted loop className="background-video">
          <source src={vd} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="bmi-calculator-container">
        <a href="clhome" className="home-button">
          Home
        </a>
        <div className="bmi-calculator">
          <div className="result">
            <div className="result-text" style={resultBg}>
              <h1>
                <span id="bmiValue">{bmi}</span> kg/m<sup>2</sup>
              </h1>
              <small id="bmid">{bmiCategory}</small>
            </div>
          </div>
          <div className="calculator">
            <h2 className="text-center calculator-title">What's Your BMI?</h2>
            <hr className="calculator-hr" />
            <div className="height">
              <input
                className="value_range"
                id="height"
                type="range"
                value={height}
                min="100"
                max="250"
                step="1"
                onChange={(e) => setHeight(e.target.value)}
              />
              <div className="label-height field-text">{height} cm</div>
            </div>
            <div className="weight">
              <input
                className="value_range"
                id="weight"
                type="range"
                value={weight}
                min="0"
                max="250"
                step="1"
                onChange={(e) => setWeight(e.target.value)}
              />
              <div className="label-weight field-text">{weight} kg</div>
            </div>
            <div className="submit">
              <input
                type="submit"
                id="submit"
                value="Calculate"
                className="submit"
                onClick={calculateBmi}
              />
            </div>
          </div>
        </div>
        {renderDietButtons()}
      </div>
    </div>
  );
};

export default BmiCalculator;
