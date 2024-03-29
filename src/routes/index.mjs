import { Router } from "express";
import addListRouter from "./addContact.routes.mjs";
import sendEmailRouter from "./sendEmail.routes.mjs";

const router = new Router();

router.get("/", (req, res) => res.send("good"));
router.use("/contact", addListRouter);
router.use("/email", sendEmailRouter);

export default router;
