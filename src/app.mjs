import express, { urlencoded, json } from "express";
import helmet from "helmet";
import morgan from "morgan";
import router from "./routes/index.mjs";
import cors from "cors";

const app = express();

const whitelist = [
	"http://localhost:8080",
	"https://omnidev.ca/",
	"https://omnigo.ca/",
];
const corsOptions = {
	origin: "*",
};

app.use(cors(corsOptions));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/", router);

export default app;
