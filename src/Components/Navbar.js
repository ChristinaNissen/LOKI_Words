import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdHelpOutline, MdHome } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Close dropdown when clicking outside the profile area
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdownOpen(false);
    navigate("/welcome"); // Navigate to welcome page upon logout
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Coat_of_Arms_of_Denmark.svg"
          alt="Agency Logo"
        />
        <span>Agency for Online Voting</span>
      </div>
      <div className="navbar-right">
        <nav className="navbar-links">
          <a href="/help" className="navbar-link">
            <MdHelpOutline className="navbar-icon" size={20} />
            <span className="navbar-text">Help</span>
          </a>
          <a href="/" className="navbar-link">
            <MdHome className="navbar-icon" size={20} />
            <span className="navbar-text">Home</span>
          </a>
        </nav>
        {isLoggedIn && (
          <div className="navbar-profile" ref={dropdownRef}>
            <FaUserCircle
              className="navbar-icon profile-icon"
              size={24}
              onClick={() => setDropdownOpen((prev) => !prev)}
            />
            {dropdownOpen && (
              <div className="profile-dropdown">
                <button onClick={handleLogout} className="dropdown-item">
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;