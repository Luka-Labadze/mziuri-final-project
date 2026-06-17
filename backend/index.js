import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import connectDB from "./db/connection.js";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import CardsRouter from "./routes/cards.js";
import UsersRouter from "./routes/users.router.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(compression());

app.use(express.json());

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100,
  message: "Too many requests from this IP, please try again later",
});
// app.use(limiter)

app.use("/api", CardsRouter);
app.use("/api/users", UsersRouter);

app.listen(PORT, () => {
  console.log("Server is running on PORT :", PORT);
  connectDB(process.env.CONNECTION_STRING);
});
