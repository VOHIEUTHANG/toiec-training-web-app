import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function connectMongoDB() {
  console.log("Connect to MongoDB,", process.env.MONGODB_CONNECT_URL);
  return mongoose
    .connect(process.env.MONGODB_CONNECT_URL ?? "")
    .then(() => {
      console.log("Connect Databse successfully !");
    })
    .catch(() => console.log("Connect to MongoDB failured !"));
}
