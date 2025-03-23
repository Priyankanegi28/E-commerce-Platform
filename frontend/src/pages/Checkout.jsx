import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items || []);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handlePayment = (method) => {
    alert(`Payment Method Selected: ${method}`);
    setIsModalOpen(false);
    dispatch(clearCart());
  };

  return (
    <div style={styles.container}>
      <h2>Checkout 🛍</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={styles.list}>
            {cartItems.map((item) => (
              <li key={item._id} style={styles.item}>
                {item.name} - ₹{item.price} x {item.quantity || 1}
              </li>
            ))}
          </ul>
          <h3>Total: ₹{totalAmount}</h3>
          <button style={styles.button} onClick={handleCheckout}>
            Proceed to Payment
          </button>
        </>
      )}

      {/* Payment Modal */}
      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Confirm Payment</h2>
            <p>Total Amount: ₹{totalAmount}</p>
            <ul>
              {cartItems.map((item) => (
                <li key={item._id}>
                  {item.name} - ₹{item.price} x {item.quantity || 1}
                </li>
              ))}
            </ul>
            <button style={styles.payButton} onClick={() => handlePayment("Online Payment")}>
              Pay Using Online 💳
            </button>
            <button style={styles.payButton} onClick={() => handlePayment("Cash on Delivery")}>
              Pay on Delivery 🚚
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  list: {
    padding: 0,
  },
  item: {
    listStyle: "none",
    borderBottom: "1px solid #ddd",
    padding: "10px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    minWidth: "300px",
  },
  payButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    margin: "10px",
    width: "100%",
  },
};

export default Checkout;
