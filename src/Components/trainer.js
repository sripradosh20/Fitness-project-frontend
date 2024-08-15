import React from 'react';
import './trainer.css';
import { Link } from 'react-router-dom';

const ProfileCard = () => {
  return (
    <div className="profile-container">
      <div className="navbar">
        <Link to="/clhome" className="home-button">Home</Link>
      </div>
      <h1 className='head'>training level</h1>
      <div className="cards-container">
        <div className="box">
          <div className="imgBx">
            <img src="https://images.unsplash.com/photo-1578924608828-79a71150f711?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trainer 1" />
          </div>
          <div className="card-footer">
            <h3>beginner</h3>
            <h3></h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trainer 2" />
          </div>
          <div className="card-footer">
            <h3>intermediate</h3>
            <h3></h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src="https://images.unsplash.com/photo-1579758682665-53a1a614eea6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trainer 3" />
          </div>
          <div className="card-footer">
            <h3>professional</h3>
            <h3></h3>
          </div>
        </div>
      </div>

      <div className="premium-plans">
        <h2>Premium Plans</h2>
        <div className="plans-container">
          <div className="plan-card">
            <h3>Basic Plan</h3>
            <div className="price">$29/month</div>
            <ul>
              <li>Access to all classes</li>
              <li>1-on-1 consultation</li>
            </ul>
          </div>
          <div className="plan-card">
            <h3>Standard Plan</h3>
            <div className="price">$49/month</div>
            <ul>
              <li>Access to all classes</li>
              <li>1-on-1 consultation</li>
              <li>Personalized workout plans</li>
            </ul>
          </div>
          <div className="plan-card">
            <h3>Premium Plan</h3>
            <div className="price">$79/month</div>
            <ul>
              <li>Access to all classes</li>
              <li>1-on-1 consultation</li>
              <li>Personalized workout plans</li>
              <li>Dietary advice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
