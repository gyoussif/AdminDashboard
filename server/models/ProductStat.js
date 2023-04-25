import mongoose from "mongoose";

// Define the ProductStat schema with its properties and data types
const ProductStatSchema = new mongoose.Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
  },
  { timestamps: true }
);

// Create the ProductStat model using the ProductStat schema
const ProductStat = mongoose.model("ProductStat", ProductStatSchema);

export default ProductStat; // Export the ProductStat model
