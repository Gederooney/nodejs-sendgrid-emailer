import { Router } from "express";
import { config } from "dotenv";
import client from "@sendgrid/client";
import { check, validationResult } from "express-validator";

config();
const addListRouter = new Router();
const key = process.env.SENDGRID_APIKEY;
client.setApiKey(key);

addListRouter.post(
	"/add",
	check(
		"email",
		"please check your email before sending it to the server"
	).isEmail(),
	(req, res) => {
		const errors = validationResult(req);
		if (errors.isEmpty()) {
			const { email } = req.body;
			const data = {
				list_ids: ["4651deea-06e2-4b13-9ecd-af57c7ef3b25"],
				contacts: [
					{
						email,
					},
				],
			};

			const request = {
				url: `/v3/marketing/contacts`,
				method: "PUT",
				body: data,
			};

			client
				.request(request)
				.then(([response, body]) => {
					if (response.statusCode === 202) {
						return res.status(200).send({
							sucess: true,
							message: "email added",
							...response.body,
						});
					}
					return res
						.status(500)
						.send({ message: "internal server error" });
				})
				.catch((error) => {
					console.error(error.response.body);
					return res
						.status(500)
						.send({ message: "internal server error" });
				});
			return;
		}
		return res.status(400).send({
			success: false,
			message: "Bad request",
			errors: errors.array(),
			received: req.body,
		});
	}
);

export default addListRouter;
