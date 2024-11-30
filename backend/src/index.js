import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import aldumsRoutes from "./routes/albums.route.js";
import songsRoutes from "./routes/songs.route.js";
import statsRoutes from "./routes/stats.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/app/user", userRoutes);
app.use("/app/auth", authRoutes);
app.use("/app/admin", adminRoutes);
app.use("/app/songs", songsRoutes);
app.use("/app/aldums", aldumsRoutes);
app.use("/app/stats", statsRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
