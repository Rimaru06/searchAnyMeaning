import mongoose from "mongoose";

const connectDB = async (url : string) : Promise<void> => {
    try {
        await mongoose.connect(url);
        console.log("Database Connected succesfully!");
    } catch (error) {
        console.error("Error ocuured while connecting" , error);
        process.exit(1);
    }
}
export default connectDB;