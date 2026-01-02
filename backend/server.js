const express = require("express"); // imports the Express framework (used to create your web server)
const cors = require("cors");   // imports CORS middleware so your frontend can talk to this backend from another domain
const dotenv = require("dotenv"); // loads environment variables from a .env file into process.env
const connectDB = require("./config/db.js"); // imports the database (custom MongoDB connection file)
const userRoutes= require("./routes/userRoutes");
const productRoutes= require("./routes/productRoutes.js");
const cartRoutes = require ("./routes/cartRoutes.js");
const checkoutRoutes = require ("./routes/checkoutRoutes.js");
const orderRoutes = require ("./routes/orderRoutes.js");
const uploadRoutes = require ("./routes/uploadRoutes.js");
const subscribeRoute = require("./routes/subscribeRoute.js");
const adminRoutes = require("./routes/adminRoutes.js");
const productAdminRoutes = require("./routes/productAdminRoutes.js");
const adminOrderRoutes = require("./routes/adminOrderRoutes.js")
const serverless = require("serverless-http"); // wraps Express so it can run on Vercel Serverless Functions


const app = express();              //creates an Express app instance (your web server)
app.set("etag", false);
app.use(express.json());             // allows Express to automatically parse incoming JSON request bodies
dotenv.config();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "https://lift-and-drip-ecommerce-1re4.vercel.app",
  "https://lift-and-drip-ecommerce.vercel.app",
].filter(Boolean);

app.use(cors({
  origin: (origin, cb) => {
    if (!origin) return cb(null, true);
    if (allowedOrigins.includes(origin)) return cb(null, true);
    if (/^https:\/\/lift-and-drip-ecommerce-.*\.vercel\.app$/.test(origin)) return cb(null, true);
    return cb(new Error("Not allowed by CORS: " + origin));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.options("*", cors());

app.use((req, res, next) => { console.log(req.method, req.url); next(); });

const PORT = process.env.PORT || 3000; //Port for http://localhost:9000

connectDB().catch((err) => { // Connect to MongoDB
  console.error("MongoDB connection failed", err.message);
});


app.get("/", (req, res) => {  //  When someone visits the homepage ( / ) of my API using a GET request send them a response that says WELCOME TO LIFT & DRIP API!
res.send("WELCOME TO LIFT & DRIP API!");       // the response when someone visits that route

});

app.get("/health", (req, res) => {
res.status(200).json({ ok: true });
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/subscribe", subscribeRoute);

// Admin
app.use("/api/admin/users",adminRoutes);
app.use("/api/admin/products",productAdminRoutes)
app.use("/api/admin/orders",adminOrderRoutes)

// app.listen(PORT, () => { // starts the server and makes it listen for requests on port 9000
//     console.log(`Server is running on http://localhost:${PORT}`)      // logs a confirmation message in the terminal
// });

// Export as serverless handler for Vercel (NO app.listen)
module.exports = serverless(app); // wraps the Express app so Vercel can run it as a serverless function
