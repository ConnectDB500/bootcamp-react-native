import express from "express";
import cors from "cors";

import router from "./routes/routes";

function createApp() {
    const app = express();

    const corsOptions = {
        origin: ["http://facebook.com", "http://google.com"],
        method: ["GET"]
    }

    app.use(express.json());
    app.use("/api", router);
    app.use(cors());

    return app;
}

export default createApp;