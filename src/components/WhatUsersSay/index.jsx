import React from 'react';
import './style.css';
import perfilImage from '../../assets/perfil.jpg';
import decoRight from '../../assets/Deco-right.png';
import decoLeft from '../../assets/Deco-left.png';

export default function WhatUsersSay() {
  return (
    <section className="what-section">
      <div className="vector-decoration top-right">
        <img src={decoRight} alt="Decoração" className="deco-image" />
      </div>
      
      <div className="vector-decoration bottom-left">
        <img src={decoLeft} alt="Decoração" className="deco-image" />
      </div>

      <div className="what-container">
        <div className="title-container">
          <h2 className="what-gradiente-texto">What other users say</h2>
        </div>
        
        <div className="what-card">
          <h3 className="what-title">Placerat feugiat senectus</h3>
          <p className="what-text">
            Ultricies pharetra arcu turpis dui massa interdum lorem.<br />
            Viverra nunc quisque congue tincidunt potenti. Tellus, enim vel habitasse commodo ultrices aenean ultricies.
          </p>
          
          <div className="divider"></div>
          
          <div className="author-info">
            <div className="author-photo">
              <img src={perfilImage} alt="Jane Doe" />
            </div>
            <div className="author-text">
              <strong className="author-name">Jane Doe</strong>
              <span className="author-title">Senior Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}