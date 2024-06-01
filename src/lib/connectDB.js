import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const OPTIONS = {
            dbName: process.env.DATABASE_NAME
        }
        await mongoose.connect(process.env.DATABASE_URL, OPTIONS);
        console.log("DB CONNECTED...");
    } catch (error) {
        console.log("Fail DB connection...");
        console.log(error);
    }
}

export default connectDB;
