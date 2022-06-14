import express, { urlencoded, json } from "express";
import helmet from "helmet";
import morgan from "morgan";
import router from "./routes/index.mjs";
import cors from "cors";

const app = express();

app.use(
	cors({
		origin: ["https://omnidev.ca/", "https://omnigo.ca/", "http://localhost:3000"],
	})
);
app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/", router);

export default app;
