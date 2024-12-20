import mongoose from "mongoose";

export const connectDB = ( ) => {
    mongoose.connect(process.env.DB_CLOUD_URI).then((conn) => {
        console.log(`Mongo database connected with the host: ${conn.connection.host}`);
    }).catch((err) => {
        console.log(err.message);
    })
}