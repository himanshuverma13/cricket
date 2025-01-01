import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// Image
import Logo from "../../asset/img/Logo/logo.png";
import { NavLink } from "react-router-dom";
 
const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
 
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
 
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={isCollapsed}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon bg-white shadow rounded p-3"></span>
          </button>
          <div className="logo-position">
              <NavLink to="/">
                <div className="navbar-brand text-decoration-none m-0">
                  <img src={Logo} alt="Loading" className="ms-5" />
                </div>
              </NavLink>
            </div>

          <div
            className={`collapse navbar-collapse ${isCollapsed ? "show" : ""}`}
            id="navbarTogglerDemo01"
          >
          
 
            <ul
              className="navbar-nav me-auto ms-auto mb-2 mb-lg-0"
              style={{ gap: "1.5rem" }}
            >
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
                      `nav-link fonst-size-18 text-white fw-bold ${
                        isActive ? "active" : ""
                      }`
                    }
                    to={path}
                    style={({ isActive }) =>
                      isActive
                        ? {
                            borderBottom: "2px solid #fff",
                            paddingBottom: "2px",
                            color: "#19454b",
                            fontWeight: "700",
                          }
                        : {}
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
 
            <div
              className="d-flex align-items-center"
              style={{ gap: "2rem", paddingRight: "10px" }}
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pantone"
              >
                <FaFacebook className="text-white" size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pantone"
              >
                <FaTwitter className="text-white" size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pantone"
              >
                <FaInstagram className="text-white" size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
 
export default Navbar;
 

