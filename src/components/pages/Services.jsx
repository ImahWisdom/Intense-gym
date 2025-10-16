import React from 'react';
import "./Services.css";
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <div className="background">
        <div className="text-contain">
          <h1>Services</h1>
          <h2>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Home
            </Link>
            / Services
          </h2>
        </div>
      </div>

      {/* ===== Fitness Programs Section ===== */}
      <div className="fitness-section">
        <div className="fitness-content">
          <img src="about3.jpg" alt="Fitness Programs" className="fitness-image" />
          <div className="fitness-text">
            <h2>We provide all types of fitness programs</h2>
            <h3>CHOOSE YOUR WAY</h3>
            <p>
              World is committed to making participation in the event harassment-free and an experience for everyone,
              regardless of level of experience, gender identity and expression, orientation, or disability.
            </p>
            <h4>Process Optimization</h4>
            <h4>Personal Guidance</h4>
          </div>
        </div>
      </div>

      {/* ===== Choose Plan Section ===== */}
      <div className="welcome-container">
        <h1 className="welcome-title">Choose Your Plan</h1>
        <div className="red-line"></div>
        <p className="welcome-message">
          You can choose any membership plan that you like, but we recommend trying our workouts for yourself before buying.
        </p>
      </div>

      {/* ===== Workout Plans ===== */}
      <div className="workout-plans">
        <h1>Workout Plans</h1>
        <div className="plan-container">
          <div className="plan starter-plan">
            <h2>Starter Plan</h2>
            <p className="price">$29.99/month</p>
            <ul>
              <li>Access to gym facilities</li>
              <li>1 personal training session</li>
              <li>Weekly group classes</li>
              <li>Nutrition guide</li>
            </ul>
            <button className="btn">Choose Plan</button>
          </div>

          <div className="plan basic-plan">
            <h2>Basic Plan</h2>
            <p className="price">$49.99/month</p>
            <ul>
              <li>Access to gym facilities</li>
              <li>3 personal training sessions</li>
              <li>Unlimited group classes</li>
              <li>Nutrition guide</li>
              <li>Monthly fitness assessment</li>
            </ul>
            <button className="btn">Choose Plan</button>
          </div>

          <div className="plan pro-plan">
            <h2>Pro Plan</h2>
            <p className="price">$79.99/month</p>
            <ul>
              <li>Access to gym facilities</li>
              <li>Unlimited personal training sessions</li>
              <li>Unlimited group classes</li>
              <li>Customized nutrition plan</li>
              <li>Weekly fitness assessments</li>
              <li>Access to exclusive workshops</li>
            </ul>
            <button className="btn">Choose Plan</button>
          </div>
        </div>
      </div>

      {/* ===== CTA Section ===== */}
      <div className="fitness-community">
        <div className="line"></div>
        <h1>JOIN OUR FITNESS COMMUNITY AND IMPROVE YOUR SKILLS</h1>
      </div>
    </>
  );
};

export default Services;

