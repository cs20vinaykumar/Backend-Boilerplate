import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { connectToMongoDb } from "./config/db.js";
import { errorLog, successLog } from "./utils/logger.js";
import allRoutes from "./routes/allRoutes.js";
dotenv.config({
  path: "./config/.env",
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

["assets"].forEach((folder) => {
  app.use(
    `/${folder}`,
    express.static(path.join(__dirname, `public/uploads/${folder}`))
  );
});

app.use("/api", allRoutes);

app.listen(PORT, (error) => {
  if (error) {
    errorLog("Error in running server:", error);
  } else {
    connectToMongoDb();
    successLog(`Server is running at http://localhost:${PORT}`);
  }
});
