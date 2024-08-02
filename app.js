import express from "express";
import { config } from "dotenv";
import userRoutes from "./routes/userRoute.js";
import cors from "cors";
config({ path: "./config.env" });

export const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);
