import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });
      alert("Signup Successful! Please login.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Signup</h2>
        {error && <p style={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSignup} style={styles.button}>Sign Up</button>
        <p style={styles.text}>
          Already have an account? <a href="/login" style={styles.link}>Log in</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f5f5f5" },
  card: { backgroundColor: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", textAlign: "center", width: "320px" },
  title: { marginBottom: "20px", color: "#333" },
  error: { color: "red", fontSize: "14px", marginBottom: "10px" },
  input: { width: "100%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc", fontSize: "16px" },
  button: { width: "100%", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" },
};

export default Signup;
