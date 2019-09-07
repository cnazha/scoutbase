import express from "express";
const app = express();

// Handle root GET route
app.get("/", (req, res, next) => res.send("Welcome to Scoutbase challenge!"));

export default app;
