const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const products = [
  {
    name: "Wireless Headphones",
    description: "High-quality sound and long battery life.",
    price: 2999,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097",
    category: "Electronics",
    stock: 20,
  },
  {
    name: "Smart Watch",
    description: "Track your fitness and stay connected.",
    price: 4999,
    image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800",
    category: "Wearable",
    stock: 15,
  },
  {
    name: "Gaming Mouse",
    description: "Ergonomic design with RGB lighting.",
    price: 1999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FQXsh-LzFKpGqaf_MgESYlA_VLtBQ7IT0A&s",
    category: "Accessories",
    stock: 30,
  },
  {
    name: "Mechanical Keyboard",
    description: "RGB backlit with high-speed switches.",
    price: 3999,
    image: "https://m.media-amazon.com/images/I/71LBvbVa95L.AC_UF1000,1000_QL80.jpg",
    category: "Accessories",
    stock: 25,
  },
  {
    name: "Laptop Cooling Pad",
    description: "Efficient cooling system with LED fans.",
    price: 1499,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3kWinPBQGNp3mGb7-t8n3CUte1VPZFeMUw&s",
    category: "Accessories",
    stock: 40,
  },
  {
    name: "Bluetooth Speaker",
    description: "Powerful bass and crystal-clear sound.",
    price: 3499,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYSJGHgOyc_g3BOFSwTCoyGu9ykfZQSCleQ&s",
    category: "Electronics",
    stock: 18,
  },
  {
    name: "4K Smart TV",
    description: "Ultra HD screen with HDR support.",
    price: 49999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdEuROOaNw35JOJ0VbJ88bIysJdfTwsx3Qg&s",
    category: "Electronics",
    stock: 10,
  },
  {
    name: "Gaming Chair",
    description: "Ergonomic design for long gaming sessions.",
    price: 8999,
    image: "https://m.media-amazon.com/images/I/71DlNwhYT1L.jpg",
    category: "Furniture",
    stock: 12,
  },
  {
    name: "DSLR Camera",
    description: "Professional camera with 24MP sensor.",
    price: 54999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdfKqHC4s_8X4pHgVJs_TJIEbNeNi9Hye1A&s",
    category: "Electronics",
    stock: 8,
  },
  {
    name: "Smartphone",
    description: "Latest model with AMOLED display.",
    price: 59999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFePY9eyi858Gq4NQsrz03asppiw-Kphx8A&s",
    category: "Electronics",
    stock: 22,
  },
  {
    name: "Tablet",
    description: "10-inch display with stylus support.",
    price: 25999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5AyFcAelhgHZHothCyBv8CJ_Ir8o1xkQOGg&s",
    category: "Electronics",
    stock: 15,
  },
  {
    name: "Fitness Band",
    description: "Track your steps and heart rate.",
    price: 2999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuV0eAK6LPV6Rx2IT__KdPNnoapOeq_AR27g&s",
    category: "Wearable",
    stock: 50,
  },
  {
    name: "Noise Cancelling Earbuds",
    description: "Wireless and immersive sound experience.",
    price: 3999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYKSd-PF_JsxTwbCkkbKC8PqUIO-x0fxh2ww&s",
    category: "Electronics",
    stock: 30,
  },
  {
    name: "Power Bank",
    description: "10000mAh fast-charging portable power bank.",
    price: 1299,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdFRZL_jn3RTS_m76NPqjxnmP7Nx_r5ZWalg&s",
    category: "Accessories",
    stock: 35,
  },
  {
    "name": "USB-C Hub",
    "description": "Multi-port USB-C hub with HDMI and card reader support.",
    "price": 2999,
    "image": "https://m.media-amazon.com/images/I/61QbS525pgL.jpg",
    "category": "Accessories",
    "stock": 20
  },
  {
    "name": "Ergonomic Office Chair",
    "description": "Comfortable office chair with lumbar support.",
    "price": 12999,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvCaxy6T9zxT3SVTphPbDyqM2hbFMGw-vAA&s",
    "category": "Furniture",
    "stock": 10
  },
  {
    name: "Portable Projector",
    description: "Mini projector with full HD resolution.",
    price: 8999,
    image: "https://m.media-amazon.com/images/I/51CnRBSVnrL.jpg",
    category: "Electronics",
    stock: 12,
  },
  {
    name: "Wireless Charging Pad",
    description: "Qi-certified fast wireless charger.",
    price: 1499,
    image: "https://images-cdn.ubuy.co.in/65191a17d88e912b726baed8-belkin-magsafe-3-in-1-wireless-charging.jpg",
    category: "Accessories",
    stock: 25,
  },
  {
    name: "VR Headset",
    description: "Immersive virtual reality experience.",
    price: 19999,
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202501/samsung-vr-headset-232003111-16x9_0.jpeg?VersionId=.EPAEl7udACj.8XotB4MyaXMnDSM5hnX",
    category: "Electronics",
    stock: 8,
  },
  {
    name: "Smart Home Security Camera",
    description: "1080p surveillance camera with night vision.",
    price: 5999,
    image: "https://m.media-amazon.com/images/I/614DzjUOgDL.AC_UF1000,1000_QL80.jpg",
    category: "Home Security",
    stock: 20,
  },
  {
    name: "Electric Standing Desk",
    description: "Adjustable height desk for ergonomic workspaces.",
    price: 19999,
    image: "https://images-cdn.ubuy.co.in/6698d1cc93ee6d0d704b86d0-ergear-standing-desk-w-hidden-power.jpg",
    category: "Furniture",
    stock: 15,
  },
  {
    name: "Portable SSD",
    description: "1TB high-speed external SSD.",
    price: 8999,
    image: "https://m.media-amazon.com/images/I/711-n+US0bL.jpg",
    category: "Storage",
    stock: 30,
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Sample Products Inserted!");
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting data:", error);
    process.exit(1);
  }
};

importData();