import React from 'react';
import styles from '../assets/styles/styles.module.css';

const ServicesSection = () => {
  return (
    <section id="services" className={styles.services}>
      
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Service 1</h3>
          <p>Description of service 1.</p>
        </div>
        <div className="service-item">
          <h3>Service 2</h3>
          <p>Description of service 2.</p>
        </div>
        {/* Add more service items as necessary */}
      </div>
    </section>
  );
};





export default ServicesSection;
