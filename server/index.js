// server/index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// middlewares
import logger from "./middlewares/logger.js";

//routes

// Chạy config cho dotenv (để load file .env)
dotenv.config();

const PORT = process.env.PORT || 8082;
const app = express();

// 2. Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//logger middleware
app.use(logger);

// === Kết nối MongoDB ===
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Kết nối MongoDB thành công!"))
  .catch((err) => console.error("Lỗi kết nối MongoDB:", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
