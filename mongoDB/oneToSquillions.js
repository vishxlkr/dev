// here what we do is , we store the reference of parent inside the child

import mongoose from "mongoose";

const connectDB = async () => {
   try {
      await mongoose.connect("mongodb://127.0.0.1:27017/relationDem");
      console.log("Database connected to mongoDB");
   } catch (error) {
      console.log("error", error);
   }
};

const userSchema = new mongoose.Schema({
   username: String,
   email: String,
});

const User = new mongoose.model("User", userSchema);

const postSchema = new mongoose.Schema({
   content: String,
   likes: Number,
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
   },
});

const Post = new mongoose.model("Post", postSchema);

const addData = async () => {
   let user1 = new User({
      username: "Vishal",
      email: "vishxlkr@gmail.com",
   });

   await user1.save();

   let post1 = new Post({
      content: "hello world",
      likes: 7,
      //   user: user1._id,               // assign user
   });

   post1.user = user1; // assign user
   await post1.save();
};

await connectDB();
await addData();
