import mongoose from "mongoose";
import "dotenv/config";

async function connectdb() {
  try {
    const url = `${process.env.DATABASE_URL}`;
    await mongoose.connect(url);
  } catch (err) {
    console.log(err);
  }
}

export { connectdb };
