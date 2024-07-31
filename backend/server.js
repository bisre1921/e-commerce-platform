import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import ProductRoutes from "./routes/ProductRoutes.js";
dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api/products" , ProductRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
