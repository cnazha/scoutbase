import express from "express";
import cors from "cors";

const app = express();

// Allow cors
app.use(cors());

// Handle root GET route
app.get("/", (req, res, next) => res.send("Welcome to Scoutbase challenge!"));

export default app;
