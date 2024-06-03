import React from 'react';
import './Courses.css';

const Thumbnail = ({ title, heading, description, imageUrl }) => {
  return (
    <div className="thumbnail">
      
        <div className="caption">
          <h5>{title}</h5>
          <div style={{ height: '200px', width: '200px', padding: '20px', marginBottom: '20px', border: '2px solid black', overflow: 'hidden' }}>
            <h6 align="left">{heading}</h6>
            <p align="left">{description}</p>
            {imageUrl && <img align="left" src={imageUrl} alt="Thumbnail Image" style={{ maxWidth: '50%', height: 'auto' }} />}
          </div>
        </div>  
    </div>
  );
}

export default Thumbnail;
