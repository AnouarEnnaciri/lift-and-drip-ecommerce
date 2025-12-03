const jwt = require("jsonwebtoken");
const User = require("../models/User");

//the token now has meaning.It’s not just a random string. It’s the bridge between being “logged in once” and being “recognized securely every time.”
// Middleware to protect routes

const protect = async(req,res,next)=>{
    let token;

    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer") //Bearer of this token = the owner of this ID.
    ){
try{
    token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.user.id).select("-password"); // Exclude password
    next();
} catch (error){
    console.error("Token verification failed",error);
    return res.status(401).json({message: "Not authorized, token failed"})
}
    } else {
        return res.status(401).json({message: "Not authorized, no token provided"})
    }
};

// Middleware to check if the user is an admin
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }
  return res.status(403).json({ message: "Admin only" });
};

module.exports = { protect, admin };
