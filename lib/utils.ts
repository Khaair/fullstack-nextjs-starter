import mongoose from "mongoose"

const connection: any = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect("mongodb://localhost:27017/next-app");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
  }
};
