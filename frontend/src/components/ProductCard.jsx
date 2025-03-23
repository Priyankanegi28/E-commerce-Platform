import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))} style={styles.button}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  button: {
    padding: "10px",
    background: "#ff6f61",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default ProductCard;