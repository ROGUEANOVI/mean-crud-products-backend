import mongoose from 'mongoose';

const URI = process.env.MONGODB_URI
? process.env.MONGODB_URI
: "mongodb://localhost/test";

export const startConnection = async () =>{
  try {
    const db = await mongoose.connect(URI);
    console.log(db.Connection.name);
    
  } catch (error) {
    console.log(error); 
  }
}