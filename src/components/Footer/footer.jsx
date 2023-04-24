import React from 'react';
// import './Footer.css';
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>consectetur adipiscing elit. Fusce tristique purus eget orci lacinia, eget euismod lectus pulvinar.</p>
          <div className="contact">
            <span><i className="fas fa-phone"></i>123-456-7890</span>
            <span><i className="fas fa-envelope"></i>info@example.com</span>
          </div>
          <div className="socials">
            <a href="fb"><i className="fab fa-facebook"></i></a>
            <a href="tw"><i className="fab fa-twitter"></i></a>
            <a href="in"><i className="fab fa-instagram"></i></a>
            <a href="yo"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-section links">
          <h3>Links</h3>
          <ul>
            <li><a href="ho">Home</a></li>
            <li><a href="sh">Shop</a></li>
            <li><a href="ab">About</a></li>
            <li><a href="co">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h3>Contact Us</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      {/* <div className="footer-bottom">
        &copy; {new Date().getFullYear()} E-Commerce Website | All Rights Reserved
      </div> */}
    </footer>
  );
}

export default Footer;
