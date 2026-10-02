import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { errorHandler } from "./common/middleware/error-handler.js";
import userRoutes from "./modules/users/user.routes.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoutes);

app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "GameHub API is running",
  });
});

app.use(errorHandler);

export default app;
