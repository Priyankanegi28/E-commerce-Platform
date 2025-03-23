import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items || []);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p style={styles.empty}>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id} style={styles.cartItem}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <div style={styles.details}>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button style={styles.deleteButton} onClick={() => handleRemove(item._id)}>
              🗑️
            </button>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
  },
  heading: {
    textAlign: "center",
  },
  empty: {
    textAlign: "center",
    fontSize: "18px",
    color: "gray",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    borderBottom: "1px solid #ddd",
    padding: "10px 0",
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
  },
  details: {
    flexGrow: 1,
  },
  deleteButton: {
    background: "red",
    color: "white",
    border: "none",
    padding: "8px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
  },
};

export default Cart;
