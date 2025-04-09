import React from 'react';
import './ItsTime.css';
import ItsTimeImage from '../../assets/ItsTime_image.jpg';

export default function ItsTime() {
  return (
    <section className="its-time-section">
      <div className="its-time-container">
        <div className="content-wrapper">
          <h1>It's time to take a break</h1>
          <p>Build your meditation skills with an app that gives you all you need!</p>
          
          <div className="input-group">
            <input type="text" placeholder="Enter your name" />
            <button>Start Now</button>
          </div>
        </div>

        <div className="image-container">
          <img src={ItsTimeImage} alt="Meditation app illustration" />
        </div>
      </div>
    </section>
  );
}