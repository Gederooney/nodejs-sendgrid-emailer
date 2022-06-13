import express, { urlencoded, json } from "express";
import helmet from "helmet";
import morgan from "morgan";
import router from "./routes/index.mjs";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/", router);

export default app;
