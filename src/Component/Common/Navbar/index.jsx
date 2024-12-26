import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// Image
import Logo from "../../asset/img/Logo/cricket-logo-removebg-preview.png";
import { NavLink } from "react-router-dom";
 
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"  
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="logo-position me-3">
              <NavLink to="/">
              <div className="navbar-brand text-decoration-none">
                <img src={Logo} alt="Loading" className="ms-5" />
              </div>
              </NavLink>
            </div>
 
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0" style={{ gap: "1.5rem" }}>
              {[
                { path: "/", label: "Home" },
                { path: "/schedule", label: "Schedule" },
                { path: "/series", label: "Series" },
                { path: "/team", label: "Team" },
                { path: "/news", label: "News" },
              ].map(({ path, label }) => (
                <li className="nav-item" key={path}>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link fonst-size-18 fw-bold  ${isActive ? "active" : ""}`
                    }
                    to={path}
                    style={({ isActive }) =>
                      isActive
                        ? {
                            borderBottom: "2px solid #19454b",
                            paddingBottom: "2px",
                            color:"#19454b",
                            fontWeight:"700"
                          }
                        : {}
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
 
            <div className="d-flex align-items-center" style={{ gap: "2rem", paddingRight:"10px" }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-pantone">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-pantone">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pantone">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
 
export default Navbar;