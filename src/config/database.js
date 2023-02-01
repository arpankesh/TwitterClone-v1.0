// const mongoose = require("mongoose");
import mongoose from "mongoose";

export const connect = async () => {
    // In Sanket bhaiya video he probably said to write "mongodb://localhost/DB_NAME", but this will work only till node version 16, from version 18, the syntax is "mongodb://127.0.0.1:27017/DB_NAME", where 127.0.0.1 is the server number that denotes localhost and 127017 is the port on which mongoDb server is running.
    await mongoose.connect("mongodb://127.0.0.1:27017/twitter_Dev_Clone");
}
