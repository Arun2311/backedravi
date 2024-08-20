const mongoose = require("mongoose");
require('dotenv').config(); 

const connectDB = async () => {
    try {
        const mongoDBUrl = process.env.mongodb_url;
        if (!mongoDBUrl) {
            throw new Error("MongoDB URL is not defined in environment variables");
        }
        await mongoose.connect(mongoDBUrl, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            dbName: 'testpract'
        });
        
    } catch (error) {
        console.error("MongoDB connection error:", error);
        // Rethrow the error to be caught by the caller if needed
        throw error;
    }
};

module.exports = connectDB;