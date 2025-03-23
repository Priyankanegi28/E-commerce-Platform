import React from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Company Info */}
        <div style={styles.section}>
          <h3>ShopEase 🛍</h3>
          <p>Your go-to place for amazing deals and products!</p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3>Quick Links</h3>
          <ul style={styles.list}>
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/cart" style={styles.link}>Cart</a></li>
            <li><a href="/cart" style={styles.link}>My Orders</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.section}>
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt style={styles.icon} /> 123, Market Street, New Delhi</p>
          <p><FaPhone style={styles.icon} /> +91 98765 43210</p>
          <p><FaEnvelope style={styles.icon} /> support@shopease.com</p>
        </div>

        {/* Social Media */}
        <div style={styles.section}>
          <h3>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" style={styles.iconLink}><FaFacebookF /></a>
            <a href="https://twitter.com" style={styles.iconLink}><FaTwitter /></a>
            <a href="https://instagram.com" style={styles.iconLink}><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={styles.copyright}>
        <p>© 2025 ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "30px 20px",
    textAlign: "center",
    marginTop: "40px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    maxWidth: "1100px",
    margin: "auto",
  },
  section: {
    textAlign: "left",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#bbb",
    transition: "0.3s",
  },
  icon: {
    marginRight: "8px",
  },
  iconLink: {
    fontSize: "20px",
    marginRight: "10px",
    color: "#fff",
    transition: "0.3s",
    textDecoration: "none",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
  },
  copyright: {
    marginTop: "20px",
    borderTop: "1px solid #555",
    paddingTop: "10px",
    fontSize: "14px",
  },
};

export default Footer;
