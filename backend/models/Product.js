const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discountPrice: {
      type: Number,
      min: 0,
      validate: {
        validator(v) {
          if (v == null) return true;
          return v < this.price;
        },
        message: "discountPrice has to be lower than the price",
      },
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    sku: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    equipmentType: {
      type: [String],
      required: true,
    },
    weightRange: {
      type: String,
      required: false,
      trim: true,
    },

    images: {
      type: [
        {
          url: {
            type: String,
            required: true,
            trim: true,
          },
          altText: {
            type: String,
            trim: true,
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
    isPublished: {
      type: Boolean,
      default: false,
    },
    isNewArrival: {
       type: Boolean,
       default: false,
    },

    newArrivalRank: {
       type: Number,
       default: 9999,
       min: 0,
    },

    isBestSeller: {
      type: Boolean,
      default: false,
    },
    isTopStrength: {
      type: Boolean,
      default: false,
    },
    isTopConditioning: {
      type: Boolean,
      default: false,
    },


    featuredRank: { type: Number, default: 9999, min: 0 },
    bestSellerRank: { type: Number, default: 9999, min: 0 },
    topStrengthRank: { type: Number, default: 9999, min: 0 },
    topConditioningRank: { type: Number, default: 9999, min: 0 },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    numReviews: {
      type: Number,
      default: 0,
      min: 0,
    },

    tags: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    metaTitle: {
      type: String,
      trim: true,
    },
    metaDescription: {
      type: String,
      trim: true,
      maxlength: 160,
    },
    metaKeywords: {
      type: String,
      trim: true,
      maxlength: 70,
    },
    dimensions: {
      length: { type: Number, min: 0 },
      width: { type: Number, min: 0 },
      height: { type: Number, min: 0 },
      unit: { type: String, enum: ["cm", "in"], default: "cm" },
    },
    weight: { type: Number, min: 0 },
    weightUnit: { type: String, enum: ["KG", "LB"], default: "KG" },
  },
  { timestamps: true }
);

productSchema.index({ sku: 1 }, { unique: true });
productSchema.index({ category: 1, equipmentType: 1, isPublished: 1 });
productSchema.index({ name: "text", description: "text", tags: "text" });
productSchema.index({ isFeatured: 1, featuredRank: 1, isPublished: 1 });
productSchema.index({ isBestSeller: 1, bestSellerRank: 1, isPublished: 1 });
productSchema.index({ isTopStrength: 1, topStrengthRank: 1, isPublished: 1 });
productSchema.index({ isTopConditioning: 1, topConditioningRank: 1, isPublished: 1 });
productSchema.index({ isNewArrival: 1, newArrivalRank: 1, isPublished: 1 });

module.exports = mongoose.model("Product", productSchema);
