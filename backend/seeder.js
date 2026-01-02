const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart")
const products = require("./data/products");

dotenv.config();

if (process.env.NODE_ENV === "production") {
  throw new Error(" SEEDER BLOCKED IN PRODUCTION");
}


// Connect to mongoDB
mongoose.connect(process.env.MONGO_URL);

// Function to seed data
const seedData = async () => {
    try{
        // Clear existing data
        await Cart.deleteMany();

// Create a default admin User
  let createdUser=await User.findOne({email:"admin@example.com"});
  if(!createdUser){
  createdUser=await User.create({
    name:"Admin User",
    email:"admin@example.com",
    password:"123456",
    role:"admin",
  });
  }

  // Assign the default user ID to each product
  const userID = createdUser._id;
  
  const sampleProducts = products.map((product) => {
    return {...product, user: userID };
  })

  // Insert the products into the database
  for(const p of sampleProducts){
    if(!p.sku)continue;
    await Product.updateOne({sku:p.sku},{$setOnInsert:p},{upsert:true});
  }

  console.log("Product data seeded successfully!");
  process.exit();
  
    } catch (error){
      console.error("Error seeding the data:", error);
      process.exit(1);
    }
};
seedData();
