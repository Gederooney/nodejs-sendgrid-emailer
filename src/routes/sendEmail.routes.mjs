import { Router } from "express";
import { config } from "dotenv";
import client from "@sendgrid/mail";
import { check, validationResult } from "express-validator";

config();
const sendEmailRouter = new Router();
const key = process.env.SENDGRID_APIKEY;
client.setApiKey(key);

sendEmailRouter.post(
	"/contactEmail",
	[
		check("username", "userame is mandatory").isAlpha().notEmpty(),
		check("email", "email is not valid").isEmail().notEmpty(),
		check("description", "description is mandatory"),
	],
	(req, res) => {
		const errors = validationResult(req);
		const { email, username, description } = req.body;
		if (errors.isEmpty()) {
			const message = {
				to: ["email", "email"],
				from: "email",
				subject: "Nouveau formulaire de contact",
				html: `
				<p>Bonjour, ${username} demande à être contacter</p>
				<p>Il vous a laissé ce commentaire: ${description}</p>
				<p>Envoyez lui un email en cliquant <strong><a href="mailto:${email}">Ici</a><strong> ou répondez à ${email} quand vous êtes prèt
				`,
			};
			client
				.send(message)
				.then(() => {
					return res.status(200).send({ success: true });
				})
				.catch((error) => {
					console.error(error.message);
					return res.status(500).send({
						success: false,
						message: "internal server error",
					});
				});
			return;
		}
		return res.status(400).send({
			success: false,
			message: "bad request",
			errors: errors.array(),
		});
	}
);

export default sendEmailRouter;
