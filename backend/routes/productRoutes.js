const express = require("express");
const Product =require("../models/Product");
const {protect, admin} = require("../middleware/authMiddleware");

const router = express.Router();

// @route POST /api/products
// @desc Create a new Product
// @access Private/Admin

router.post("/",protect, admin, async(req,res) => {
    try{
        const {
  name,
  description,
  price,
  discountPrice,
  countInStock,
  sku,
  category,
  equipmentType,
  weightRange,
  colors,
  images,
  isFeatured,
  isPublished,
  rating,
  numReviews,
  tags,
  metaTitle,
  metaDescription,
  metaKeywords,
  dimensions,
  weight,
  weightUnit,
} = req.body;

const product = new Product({
  name,
  description,
  price,
  discountPrice,
  countInStock,
  sku,
  category,
  equipmentType,
  weightRange,
  colors,
  images,
  isFeatured,
  isPublished,
  rating,
  numReviews,
  tags,
  metaTitle,
  metaDescription,
  metaKeywords,
  dimensions,
  weight,
  weightUnit,
  user: req.user._id, // Reference to the admin user who created it
});

const createdProduct = await product.save();
res.status(201).json(createdProduct);
   } catch (err) {
    // this is so that we are able to see the error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation error",
      errors: Object.fromEntries(
        Object.entries(err.errors).map(([k, v]) => [k, v.message])
      ),
    });
  }
  if (err.code === 11000) {
    return res.status(400).json({ message: "Duplicate key", key: err.keyValue });
  }
  console.error(err);
  return res.status(500).json({ message: "Server error", error: err.message });
}
});

// @route PUT /api/products/:id
// @description Update an existing product ID
// @access Private/Admin
router.put("/:id", protect, admin, async(req,res) => {
    try{
        const {
  name,
  description,
  price,
  discountPrice,
  countInStock,
  sku,
  category,
  equipmentType,
  weightRange,
  colors,
  images,
  isFeatured,
  isPublished,
  rating,
  numReviews,
  tags,
  metaTitle,
  metaDescription,
  metaKeywords,
  dimensions,
  weight,
  weightUnit,
} = req.body;

// Find product by ID
const product = await Product.findById(req.params.id);

if (product) {
    // Update Product Fiels
     product.name = name || product.name;
  product.description = description || product.description;
  product.price = price || product.price;
  product.discountPrice = discountPrice || product.discountPrice;
  product.countInStock = countInStock || product.countInStock;

  // catalog
  product.category = category || product.category;
  product.equipmentType = equipmentType || product.equipmentType;
  product.weightRange = weightRange || product.weightRange;
  product.colors = colors || product.colors;
  product.images = images || product.images;
  product.tags = tags || product.tags;

  // meta
  product.metaTitle = metaTitle || product.metaTitle;
  product.metaDescription = metaDescription || product.metaDescription;
  product.metaKeywords = metaKeywords || product.metaKeywords;

  // booleans (keep false when sent)
  product.isFeatured = isFeatured !== undefined ? isFeatured : product.isFeatured;
  product.isPublished = isPublished !== undefined ? isPublished : product.isPublished;

  // physical
  product.dimensions = dimensions || product.dimensions;
  product.weight = weight || product.weight;
  product.weightUnit = weightUnit || product.weightUnit;

  // sku
  product.sku = sku || product.sku;

  // save
  const updatedProduct = await product.save();
  res.json(updatedProduct);

}else{
    res.status(404).json({message:"Product not found"})
}
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error")

    }
});



// @route DELETE /api/products/:id
// @desc Delete a product by ID
// @access Private/Admin
router.delete("/:id",protect,admin,async (req,res)=> {
    try{
        // Find the product by ID
        const product = await Product.findById(req.params.id);

        if (product){
            //Remove the product from the DB
            await product.deleteOne();
            res.json({message: "Product removed"})
        }else{
            res.status(404).json({message:"Product not Found"});
        }
    } catch ( error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})

// @route GET /api/products
// @desc Get all products with optional query filters
// @access Public 
router.get("/",async (req,res) =>{
  try {
    const {
    category,
    equipmentType,
    weightRange,
    colors,
    minPrice,
    maxPrice,
    sortBy,
    search,
    isFeatured,
    isPublished,
    limit,
    } = req.query;
    let query = {};

    // Filter logic
   if (category && category.toLowerCase() !== "all") {
  query.category = category;
   } 


   if (weightRange && weightRange.toLowerCase() !== "all") {
      query.weightRange = weightRange;
    }



       if (equipmentType && equipmentType.toLowerCase() !== "all") {
      query.equipmentType = equipmentType;
    }



  if (colors) {
    query.colors = {$in:  [colors]};
  }


   if (isFeatured !== undefined) {
      query.isFeatured = isFeatured === "true";
    }

    
    if (isPublished !== undefined) {
      query.isPublished = isPublished === "true";
    }

  if (minPrice || maxPrice) {
    query.price={};
    if(minPrice) query.price.$gte = Number(minPrice)
    if(maxPrice) query.price.$lte = Number(maxPrice)
  }

   if (search){
    query.$or=[
      {name: {$regex: search, $options: "i"}},
      {description: {$regex: search, $options: "i"}}
    ];
   }

   // Sort Logic
   let sort ={};
   if (sortBy){
     switch (sortBy){
      case "priceAsc":
      sort = { price: 1};
      break;
      case "priceDesc":
      sort = {price: -1};
      break;
      case "popularity":
      sort = {rating: -1};
      break;
      default:
       break;
    }
   }

   // Fetch products and apply sorting and limit
   let products = await Product.find(query)
   .sort(sort)
   .limit(Number(limit) || 0);
    res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send("server Error"); 
  }
});

// @route GET /api/products/best-seller
// @desc Retrieve the product with highest rating 
// @access Public 
router.get("/best-seller",async (req,res) =>{
  try {
    const bestSeller = await Product.findOne().sort({rating: -1});
    if (bestSeller){
      res.json(bestSeller);
    } else {
      res.status(404).json({message: "No best seller found"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
    
  }
});



// @route GET /api/products/similar/:id
// @desc Retrieve similar prodcuts based on the current category + equipmentType
// @access Public 
router.get("/similar/:id", async(req,res) =>{
  const {id} = req.params;
  console.log(id)

  try {
    const product = await Product.findById(id);

    if(!product) {
      return res.status(404).json({message: "Product not found"});
    }

    const similarProducts = await Product.find({
      _id: {$ne: id}, // Exclude the current product ID
      equipmentType: product.equipmentType,
      category:product.category,
    }).limit(4);

    res.json(similarProducts)
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
})

// @route Get /api/products/new-arrivals
// @desc Retrieve latest 8 products - Creation data 
// @acess Public
router.get("/new-arrivals", async (req,res)=>{
  try {
    // Fetch latest 8 producuts
    const newArrivals = await Product.find().sort({ createdAt: -1}).limit(8);
    res.json(newArrivals);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error")
  }
}) 


// @route GET /api/products/:id
// @desc Get a single product by ID
// @access Public
router.get("/:id", async (req,res) =>{
  try {
    const product = await Product.findById(req.params.id);
    if(product) {
      res.json(product);
    } else{
      res.status(404).json({message: "Product Not Found"})
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
})


module.exports = router;