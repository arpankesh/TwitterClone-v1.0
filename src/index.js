import express from "express";
import { connect } from "./config/database.js";

const app = express();
const PORT = 3000;

import service from "./services/tweet-services.js";

app.listen(PORT, async () => {
    console.log(`Server started at PORT :- ${PORT}`);
    await connect();
    console.log("MongoDB connected");
    let ser = new service();
    await ser.create({
        content: "My #CoDe works !!!"
    });
})