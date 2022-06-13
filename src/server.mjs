import http from "http";
import app from "./app.mjs";
import { config } from "dotenv";

config();

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {});
