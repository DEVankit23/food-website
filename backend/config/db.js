// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://Tomato-project:Tomato-project@cluster0.y3bv2h3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log("DB Connected"));
// }

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://Tomato-project:Tomato-project@cluster0.y3bv2h3.mongodb.net/food-website?retryWrites=true&w=majority'
    );
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err);
    process.exit(1); // Exit the app on DB connection failure
  }
};
