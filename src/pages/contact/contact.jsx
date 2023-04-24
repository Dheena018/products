

import React, { useState } from 'react';
import './ContactForm.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, subject, message };
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert('Thank you for contacting us!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('There was an error submitting your message. Please try again later.');
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" value={subject} onChange={(event) => setSubject(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} required />
      </div>
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
}

export default Contact;
