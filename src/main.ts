import express from "express";
import http from "http";
import mongoose from "mongoose";
import { config } from "./config/Database";
import router from "./routers/router";
import middleware from "./middleware/middleware";


const app = express();

// Connect to Mongo
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: "majority" })
    .then(() => {
        console.log(`Connected to MongoDB`);
        const server = http.createServer(app);

        app.use(middleware);
        // Middleware function to handle the /api route
        app.use("/api", router);

        const PORT = config.server.port || 2300;
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(`Error connecting to MongoDB: ${error}`);
    });
