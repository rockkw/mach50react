import React from 'react';

const UrlSection = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default UrlSection;