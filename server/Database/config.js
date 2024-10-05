import mongoose from "mongoose";

const URL = 'mongodb+srv://u03076699182:mark1122@cluster0.zzpqmqq.mongodb.net/?retryWrites=true&w=majority'

const Connection = async()=>{
    try {
        await mongoose.connect(URL);
        console.log(" Database connected suceessfuly ");
    } catch (error) {
        console.log("Database connection error", error.message);
    }
}

export default Connection;