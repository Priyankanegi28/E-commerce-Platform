import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const user = useSelector((state) => state.auth?.user) || JSON.parse(localStorage.getItem("user"));
  const cartCount = useSelector((state) => state.cart?.items?.length || 0);

  const defaultProfileImage = "https://cdn-icons-png.flaticon.com/512/3177/3177440.png";
  const profileImage = user?.profileImage || defaultProfileImage;

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setShowDropdown(false);
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>🛒 ShopEase</h2>

      {/* Navigation Links */}
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/cart" style={styles.link}>Cart ({cartCount})</Link>
        <Link to="/checkout" style={styles.link}>Checkout</Link>
      </div>

      {/* Profile Icon (Using User's Uploaded Image) */}
      {user ? (
        <div style={styles.profileContainer} ref={dropdownRef}>
          <img
            src={profileImage}
            alt="Profile"
            style={styles.profileIcon}
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div style={styles.dropdown}>
              <p style={styles.userInfo}><strong>Name:</strong> {user.name}</p>
              <p style={styles.userEmail}><strong>Email:</strong> {user.email}</p>
              <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login" style={styles.loginButton}>Login</Link>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
  },
  logo: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    flex: 1,
    justifyContent: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px",
  },
  loginButton: {
    backgroundColor: "#ff5722",
    color: "#fff",
    padding: "8px 15px",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "16px",
  },
  profileContainer: {
    position: "relative",
    cursor: "pointer",
  },
  profileIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  dropdown: {
    position: "absolute",
    top: "50px",
    right: "0",
    backgroundColor: "#fff",
    color: "#333",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    minWidth: "180px",
    textAlign: "left",
    zIndex: 1000,
  },
  userInfo: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  userEmail: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    padding: "8px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
};

export default Navbar;
