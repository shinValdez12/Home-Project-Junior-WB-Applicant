import React from 'react';
import './location.css';
import locationImg from '../../assets/loaction-bg.png';

function Location() {
  return (
    <section className="map-revamp-container">
      <div className="map-background-wrapper">
        <img src={locationImg} alt="Location Map" className="map-image-bg" />
      </div>

      <div className="location-card-revamp">
        <h3>VISIT US</h3>
        <p className="address-text">
          3190 HW-160, Suite F,<br />
          Pahrump, Nevada 89048
        </p>
        <a 
          href="https://www.google.com/maps/@36.2066913,-115.9817678,16z?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          rel="noreferrer" 
          className="map-btn"
        >
          OPEN IN GOOGLE MAPS
        </a>
      </div>
    </section>
  );
}

export default Location;