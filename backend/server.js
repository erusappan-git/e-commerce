import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

dotenv.config({ path : 'backend/config/config.env' });

connectDB();

app.use(express.json());

app.use("/api/v1", productRoutes);

app.use(errorHandler);

app.listen( process.env.PORT ,  () => {
    console.log("Server is running at PORT:", process.env.PORT);
})