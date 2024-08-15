import React from 'react';
import './clienthome.css'; 
import logo from '../Assets/logo.png';
const Clhome = () => {
  return (
    <div className="no-scroll">
      <nav className="navbar">
       <a href='/bmi'>
       <img src={logo} alt="Logo" className="logo" />
       </a>
        <ul>
        <li><a href="bmi">Nutrition Plan</a></li>
        <li><a href="tra">trainers</a></li>
        <li><a href="wrkout">about us</a></li>
          <li><a href="contact">Contact us</a></li>
          <li><a href="/">Logout</a></li>
        </ul>
      </nav>

      <div className="main">
        <div className="container">
          <h1>burn.it</h1>
          <p>Form healthy habits to take your fitness to the next level.</p>
          <a href="bmi" className="btn">Nutrition plan</a>
        </div>
      </div>

      <div className="supporting">
        <div className="container">
          <div className="col">
            <h2>Burn</h2>
            <p>Become more active by tracking your runs, rides, and walks.</p>
          </div>
          <div className="col">
            <h2>Sync</h2>
            <p>Access your activity on your phone, tablet, or computer.</p>
          </div>
          <div className="col">
            <h2>recovery</h2>
            <p>Set personal challenges and see how you rank against your friends.</p>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>

      <div className="feature">
  <div className="container">
    <h2></h2>
    <div className="button-group">
      <a href="wrkchest" className="btn">chest</a>
      <a href="wrkback" className="btn">Back</a>
      <a href="Arms" className="btn">Arms</a>
      <a href="back" className="btn">shoulders</a>
      <a href="leg" className="btn">Leg</a>
    </div>
  </div>
</div>


      <div className="supporting">
        <div className="container">
          <h2>Go Premium</h2>
          <p>Receive recommendations based on your activity to level up.</p>
          <a href="tra" className="btn">Learn more</a>
        </div>
      </div>

      <div className="footer">
        <div className="pacontainer">
        </div>
      </div>
    </div>
  );
}

export default Clhome;
