import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from "../../asset/img/Logo/logo.png"

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="footer-top d-flex align-items-center justify-between px-6">
        <div className="d-flex align-items-center">
          <img
            src={Logo}
            alt="Loading"
            className="footer-logo"
          />
        </div>
        <div className="d-flex align-items-center" style={{ gap: "2rem", paddingRight: "10px" }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-pantone">
            <FaFacebook className="text-white" size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-pantone">
            <FaTwitter className="text-white" size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pantone">
            <FaInstagram className="text-white" size={24} />
          </a>
        </div>
      </div>
      <div className="footer-bottom flex flex-col md:flex-row items-center justify-between p-2">
        <p className="text-sm">
          &copy; 2024. All rights reserved by SportsEye.
        </p>

      </div>
    </footer>
  );
};

export default Footer;