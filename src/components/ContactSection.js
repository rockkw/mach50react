import React from 'react';
import styles from '../assets/styles/styles.module.css';
// <div className={styles.heading}>

const ContactSection = () => {
  return (
    <section id="contact" className={styles.signup}>
      <p>Mach 50 is coming soon! Enter your email to enter a limited private launch</p>
      <form onsubmit="javascript:void(0);">
        <input type="email" placeholder="Enter your email address"></input>
        <button type="button">Submit</button>
      </form>
    
      <div className={styles.apps}>
          <a class="app-icon" href=""><img src="../images/wr-home-apple.png"></img></a>
          <a class="app-icon" href=""><img src="../images/wr-home-google.png"></img></a>
          <a class="app-icon" href=""><img src="../images/wr-home-blackberry.png"></img></a>
          <a class="app-icon" href=""><img src="../images/wr-home-Xiaomi.png"></img></a>
        </div>
        <div>
          <a className={styles.iconfb} href="http://www.facebook.com">Facebook</a>
          <a className={styles.icontw} href="">Twitter</a>
          <a className={styles.iconig} href="">Instagram</a>
          <a className={styles.iconwc} href="">Wechat</a>
          <a lassName={styles.iconwb} href="">Weibo</a>
        </div>
      </section>
  );
};

export default ContactSection;
