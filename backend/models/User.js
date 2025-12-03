const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true, //removes extra spaces automatically.
    },
    email:{
        type: String,
        required: true,
        unique:true, // ensures no two users have the same email
        trim:true, // removes extra spaces automatically.
        match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    password: {
        type:String,
        required:true,
        minlength:6,
    },
    role:{
        type:String,
        enum:["customer","admin"], // user can only be one of these two roles
        default:"customer",   // if no role provided, defaults to customer

    },
},
{ timestamps: true}
);

// Creates Password Hash middleware
userSchema.pre("save", async function (next) {   //Before saving a user document to MongoDB, run this function first
if (!this.isModified("password")) return next();                                               // that line is there so that the hashing logic only runs when you actually change or create the password.
//If the password is not modified, then skip hashing and move on (run next()).

    const salt = await bcrypt.genSalt(10);                        // Generate a random “salt” for the hash — adds extra security
    this.password = await bcrypt.hash(this.password, salt);      // Replace the original password with a hashed version
    next();
});


// Compare entered password with hashed password in the database
//It sends a hash to the database but not the actual password, and the same hash is identified
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);