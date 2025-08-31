// ONE TO FEW mongoDB design

import mongoose from "mongoose";

// connecting the datebase
const connectDB = async () => {
   try {
      await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
      console.log("MongoDB connection successful");
   } catch (err) {
      console.error("MongoDB connection error:", err);
   }
};

// user schema design
const userSchema = new mongoose.Schema({
   username: String,
   addresses: [
      {
         location: String,
         city: String,
      },
   ],
});

// created user model
const User = mongoose.model("User", userSchema);

// adding a user
const addUsers = async () => {
   let user1 = new User({
      username: "sherlockholmes",
      addresses: [
         {
            location: "221B Baker Street",
            city: "London",
         },
      ],
   });

   user1.addresses.push({ location: "P32 Wall Street", city: "London" });

   let result = await user1.save(); // saving the user1
   console.log(result); // log the user
};

// run
const start = async () => {
   await connectDB();
   await addUsers();
};
