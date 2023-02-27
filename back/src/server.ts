import "reflect-metadata";
import "./database/ormconfig";
import express from "express";
import cors from "cors";

import routes from "./routes/index";

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(5000, () => {
    console.log("Server running on port 5000!");
});
