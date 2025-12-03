const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        trim:true,
    },
    description: {
        type: String,
        required:true,
        trim:true,
    },
    price:{
        type: Number,
        required:true,
        min:0,
    },
    discountPrice:{
        type: Number,
        min:0,
        validate:{
            validator(v){if (v==null) return true;return v< this.price;},
            message:"discountPrice has to be lower than the price",
        },
    },
    countInStock: {
        type: Number,
        required:true,
        default:0,
        min:0,
    },
    sku:{
        type:String,
        required:true,
        trim:true,
    },
    category:{
        type:String,
        required:true,
        trim:true,
    },
    equipmentType:{
        type:[String],
        required:true,
    },
    weightRange:{
        type:String,
        required:false,
        trim:true,
    },
    colors:{
        type:[String],
        required:true,
    },
   
   
    images: {
  type: [ 
    { 
        url: { 
            type: String, 
            required: true,
             trim: true
             }, 
        altText: { 
            type: String,
             trim: true 
            }, 
    }, 
    ], 
        required: true, 
        validate: [ 
        (arr) => Array.isArray(arr) && arr.length > 0, 
        "At least one picture is required", 
     ], 
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    isPublished:{
        type: Boolean,
        default:false,
    },
    rating:{
        type: Number,
        default:0,
        min:0,
        max:5,
    },
    numReviews:{
        type: Number,
        default:0,
        min:0,
    },

    tags: [
        {
        type: String,
        trim: true,
        lowercase: true 
    }],

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    metaTitle:{
        type:String,
        trim:true,
    },
    metaDescription:{
        type: String,
        trim:true,
        maxlength:160,
    },
    metaKeywords:{
        type:String,
        trim:true,
        maxlength:70,
    },
    dimensions:{
        length: {type:Number,min:0},
        width:{type:Number,min:0},
        height:{type:Number,min:0},
        unit:{type:String,enum:["cm","in"], default:"cm"}
    },
    weight: {type:Number,min:0},
    weightUnit:{type:String, enum:["KG","LB"],default:"KG"},
},
{timestamps:true}
);

productSchema.index({ sku: 1 }, { unique: true });
productSchema.index({ category: 1, equipmentType: 1, isPublished: 1 });
productSchema.index({ name: "text", description: "text", tags: "text" });


module.exports = mongoose.model("Product",productSchema);