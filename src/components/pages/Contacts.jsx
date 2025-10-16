import React from 'react'
import "./Contacts.css"

const Contacts = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const response = await fetch('https://formspree.io/f/mvgpyoqw', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    });
  

  if (response.ok) {
    alert('Thank you for your message!');
    form.reset();
  } else {
    alert('There was a problem submitting your form.');
  }
};
  return (
    <>
     <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>If you have any questions, feel free to reach out to us!</p>
        <p><strong>Email:</strong> info@intensegym.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Address:</strong> 2 Akowonjo Rd, Shasha Rd, opposite Dopemu Under Bridge, Alimosho, Ikeja 102213, Lagos</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Form</h2>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>

      <div className="map">
        <h2>Our Location</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.123456789012!2d3.345678!3d6.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f1234567890%3A0x0!2s2%20Akowonjo%20Rd%2C%20Shasha%20Rd%2C%20opposite%20Dopemu%20Under%20Bridge%2C%20Alimosho%2C%20Ikeja%20102213%2C%20Lagos!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  

    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Contacts
