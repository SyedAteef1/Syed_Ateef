const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://syedakousar222:youjv72XqW9Inn8n@amreen.j1fof.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("The MongoDB server is connected");
    } catch (err) {
        console.log("MongoDB connection error:", err);
    }
}   

// Define Schema and Model outside the async function
const reviewSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const mod = mongoose.model('getintouch', reviewSchema);

// Call the connection function
connectDB();

module.exports = { mod };
