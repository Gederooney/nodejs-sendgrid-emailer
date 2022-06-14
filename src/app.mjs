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
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
};

app.use(cors(corsOptions));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/", router);

export default app;
