const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const serverless = require("serverless-http");

const connectDB = require("../config/db.js");

const userRoutes = require("../routes/userRoutes");
const productRoutes = require("../routes/productRoutes.js");
const cartRoutes = require("../routes/cartRoutes.js");
const checkoutRoutes = require("../routes/checkoutRoutes.js");
const orderRoutes = require("../routes/orderRoutes.js");
const uploadRoutes = require("../routes/uploadRoutes.js");
const subscribeRoute = require("../routes/subscribeRoute.js");
const adminRoutes = require("../routes/adminRoutes.js");
const productAdminRoutes = require("../routes/productAdminRoutes.js");
const adminOrderRoutes = require("../routes/adminOrderRoutes.js");

dotenv.config();

const app = express();
app.set("etag", false);
app.use(express.json());

// ✅ CORS: keep yours but simplify slightly
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "https://lift-and-drip-ecommerce-1re4.vercel.app",
  "https://lift-and-drip-ecommerce.vercel.app",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      if (/^https:\/\/lift-and-drip-ecommerce-.*\.vercel\.app$/.test(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS: " + origin));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options(/.*/, cors());

// (optional) logs
app.use((req, res, next) => { console.log(req.method, req.url); next(); });

// ✅ IMPORTANT: connect to DB (serverless-friendly)
let dbReady = false;
app.use(async (req, res, next) => {
  try {
    if (!dbReady) {
      await connectDB();
      dbReady = true;
    }
    next();
  } catch (e) {
    console.error("DB connect error:", e.message);
    res.status(500).json({ message: "DB connection failed" });
  }
});

// ✅ Routes
app.get("/", (req, res) => res.send("WELCOME TO LIFT & DRIP API!"));
app.get("/health", (req, res) => res.status(200).json({ ok: true }));

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/subscribe", subscribeRoute);

app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", productAdminRoutes);
app.use("/api/admin/orders", adminOrderRoutes);

// ✅ Export as serverless handler (NO app.listen)
module.exports = serverless(app);
