import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    return (
        <BrowserRouter>
            <div style={styles.appContainer}>
                <Navbar />
                <div style={styles.content}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

const styles = {
    appContainer: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    content: {
        flex: "1",
        padding: "20px",
    },
};

export default App;
