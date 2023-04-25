import mongoose from "mongoose";

// Define the Transaction schema with its properties and data types
const TransactionSchema = new mongoose.Schema(
  {
    userId: String,
    cost: String,
    products: {
        type:[mongoose.Types.ObjectId],
        of:Number
    },
  },
  { timestamps: true }
);

// Create the Transaction model using the Transaction schema
const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction; // Export the Transaction model
