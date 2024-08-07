import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import ProductRoutes from "./routes/ProductRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleWare.js";
dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api/products" , ProductRoutes)
app.use("/api/users" , UserRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
