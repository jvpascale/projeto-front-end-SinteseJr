import React from 'react';
import './style.css';

const Card = ({ image, title, author, avatar, isPromoted }) => {
    return (
      <div className="card">
        <div className="card-image-wrapper">
          {isPromoted && <span className="card-badge">Promoted</span>}
          <img src={image} alt={title} className="card-image" />
        </div>
            

            <div className="card-content">
                <img src={avatar} alt={author} className="card-avatar" />

                <div className="card-text">
                  <h1 className="card-title">{title}</h1>
                  <p className="card-author">{author}</p>
                </div>
            </div>
      </div>
    );
  };

export default Card;