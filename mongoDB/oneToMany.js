import mongoose, { mongo, Schema } from "mongoose";

const connectDB = async () => {
   try {
      await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
      console.log("connected to mongoDB database.");
   } catch (error) {
      console.log("Error: ", error);
   }
};

// user schema

const orderSchema = new mongoose.Schema({
   item: String,
   price: Number,
});

// creating model
const Order = mongoose.model("Order", orderSchema);

const customerSchme = new mongoose.Schema({
   name: String,
   orders: [
      {
         type: Schema.Types.ObjectId,
         ref: "Order",
      },
   ],
});

const Customer = mongoose.model("Customer", customerSchme);

// const addOrders = async () => {
//    let res = await Order.insertMany([
//       { item: "Samosa", price: 12 },
//       { item: "Chips", price: 20 },
//       { item: "Chocolate", price: 100 },
//       { item: "Colddrink", price: 50 },
//    ]);
// };

// added once only

const addCustomer = async () => {
   let customer1 = new Customer({
      name: "Vishal",
   });

   let order1 = await Order.findOne({ item: "Chips" });
   let order2 = await Order.findOne({ item: "Chocolate" });

   customer1.orders.push(order1);
   customer1.orders.push(order2);

   await customer1.save(); // saving the customer 1
};

connectDB();
addCustomer();
