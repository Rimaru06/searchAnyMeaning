import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import connectDB from './config/connectDB.js';

const Port = process.env.PORT || 5000;
const DatabaseUrl = process.env.MONGO_URI as string;


const startServer = async ()=> {
    try {
        if(!DatabaseUrl) throw new Error("database url is not defined in .env file");
        await connectDB(DatabaseUrl);
        app.listen(Port,()=> {
            console.log(`🚀 Server running at http://localhost:${Port}`);
        })
    } catch (error) {
          console.error("❌ Failed to start server:", error);
      process.exit(1);
    }
}

startServer();