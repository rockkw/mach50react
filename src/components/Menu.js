import React, { useState } from 'react';
import styles from '../assets/styles/styles.module.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="menu" className={styles.menu}>
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '---' : 'See it in action'}
      </button>

      {isOpen && (
        <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
      )}
    </div>
    </section>
  );
}

export default Menu;