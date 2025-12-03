const express = require("express"); // imports Express framework to create routes
const User = require("../models/User");  // imports the User model (MongoDB schema)
const jwt= require("jsonwebtoken");  // imports JWT library (used later for authentication tokens)
const {protect} = require("../middleware/authMiddleware");
const router = express.Router(); // creates a new router instance to handle user-related routes

//// ASYNC = "I know this might take time, so I'll wait politely"
// Without it = "I demand answers NOW and will block everything until I get them"

//// Notice: await is only used inside async!!!!!
//  Without await: "Go check if this user exists" → immediately move to next line without waiting for answer.
//  With await: "Go check if this user exists and WAIT here until you tell me the answer, then I'll continue". or send the error in catch (error)

// @route POST /api/users/register
// @desc Register a new user
// @access Public (no login required)

router.post("/register", async(req,res) => { 
    
// POST = send data to server 
// "/register" = signup route 
// async = lets us use await for database operations like checking if a user exists or saving a new one before moving to the next line.
// req = data from frontend
// res = server reply

      const {name,email,password}=req.body; // Extract user input (JSON data) sent from the frontend (name, email, password)
try{ 
    // Wait here while you search the database for any user with this email
    let user = await User.findOne({email});

    // If you found a user (user is not empty), send back an error message
    if (user) return res.status(400).json({message: "User already exists"});

    //Create a new user object in memory (but not saved to database yet)
    user = new User({name, email, password});

    // Save to database
    await user.save();

// Create JWT Payload
const payload = {user: {id: user._id, role: user.role}}

// Sign and return the token along with user data
    jwt.sign(payload,
        process.env.JWT_SECRET,
         {expiresIn:"40h"},
         (err,token) =>{
        if (err) throw err;

        // Send the user and token in response
        return res.status(201).json({
            user: {
                _id: user._id,
                name: user.name,
                email:user.email,
                role:user.role,
            },
            token,
        })
    }
  );

    // If ANY of the above lines fail, jump here
      } catch (error){ 
        console.log(error);
        res.status(500).send("Server Error");
      }
});

// @route POST / api/users/login
// @description Authenticate user
// @access Public 
router.post("/login", async (req,res) =>{
    const {email, password} = req.body;

    try{
        // Find the user by email
        let user = await User.findOne({email});

        if (!user) return res.status(400).json({message:"Invalid Credentials"})
            const isMatch = await user.comparePassword(password);

        if (!isMatch) 
            return res.status(400).json({message: "Invalid Credentials"})

        // Create JWT Payload
const payload = {user: {id: user._id, role: user.role}}

// Sign and return the token along with user data
    jwt.sign(payload,
        process.env.JWT_SECRET,
         {expiresIn:"40h"},
         (err,token) =>{
        if (err) throw err;

        // Send the user and token in response
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email:user.email,
                role:user.role,
            },
            token,
        })
    }
  );
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error")
    }
})

// @route GET /api/users/profile
// @desc Get logged-in user's profile (Protected Route)
// @access Private

//async = “I can use await.”
//await = “Wait for this to finish.”
//try/catch = “If it fails, handle it safely instead of crashing.”

router.get("/profile",protect, async (req,res) =>{
    res.json(req.user);
})

module.exports = router;  // exports this router so it can be used in server.js (via app.use)