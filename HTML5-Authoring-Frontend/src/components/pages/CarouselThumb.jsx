import React, { useState } from 'react';
import './Courses.css';

const Carousel = ({ title, heading, description, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    return (
      <div className="carousel">
        <h5>{title}</h5>
        <div style={{ height: '200px', width: '200px', padding: '20px', marginBottom: '20px', border: '2px solid black', overflow: 'hidden' }}>
            <h6>{heading}</h6>
            <p>{description}</p>
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-md-2">
                    <button onClick={goToPrevSlide}>&#11207;</button>
                </div>
                    <div className="image-container col-md-8">
                        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} style={{ maxWidth: '65%', height: 'auto' }} />
                    </div>
                <div className="col-md-2">
                    <button onClick={goToNextSlide}>&#11208;</button>
                </div>       
            </div>    
        </div>
      </div>  
    );
  };
  
  export default Carousel;