import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from "../../asset/img/Logo/cricket-logo-removebg-preview.png"
 
const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white">
      <div className="footer-top flex items-center justify-between px-6">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="MG Lion Logo"
            className="footer-logo ms-5"
          />
        </div>
        <div className="social-icons d-flex mb-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
      <div className="footer-bottom flex flex-col md:flex-row items-center justify-between p-2">
        <p className="text-sm">
          &copy; 2024. All rights reserved by MG Lion News.
        </p>
       
      </div>
    </footer>
  );
};
 
export default Footer;