import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (

    <footer >

    <hr style={{color:"orange"}}/>

      <div className="footer">


      <div className="footer-section">

        <h4>Download Our App</h4>
        <div className="logo">
        <img   src="/media/moovie.png" className="logo-img"/>
        </div>

      </div>

      <div className="footer-section">
        <h4>Navigation</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>

        </ul>
      </div>

      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
        <li>
            <a href="#">General legal info</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>

        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact Us</h4>

            <p>support@moovie.com</p>

          <p>Tel: +254000034278</p>
          <span>Or by using</span>
          <br/>
          <br/>
          <div className="social-icons-container">
      <a href="#" className="social-icon">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#" className="social-icon">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#" className="social-icon">
        <FontAwesomeIcon icon={faInstagram} />
      </a>

    </div>

      </div>

      <div className="footer-section">
        <h4>Share Website via:</h4>

      <a href="#" className="social-icon">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#" className="social-icon">
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      </div>
      </div>
    </footer>

  );
};

export default Footer;
