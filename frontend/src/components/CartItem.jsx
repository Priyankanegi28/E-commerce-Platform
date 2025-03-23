import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
    );
};

export default CartItem;