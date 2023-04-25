import mongoose from "mongoose";

// Define the Product schema with its properties and data types
const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

// Create the Product model using the Product schema
const Product = mongoose.model("Product", ProductSchema);

export default Product; // Export the Product model
