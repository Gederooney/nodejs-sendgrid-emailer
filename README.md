# Node.js SendGrid Emailer

This project is a simple yet effective email sender using Node.js and SendGrid. It provides two main functionalities: adding a new contact to a list and sending an email.

## Project Structure

1. `app.mjs`: This file configures the Express application, sets up middleware, and includes routing. It also sets up the CORS policy&#8203;.

2. `server.mjs`: This file creates the HTTP server and starts listening on a specified port&#8203;.

3. `addContact.routes.mjs`: This file handles the route for adding a new contact to a SendGrid list. It validates the incoming request data and, if valid, sends a request to the SendGrid API to add the contact&#8203;.

4. `index.mjs`: This file imports the routes from `addContact.routes.mjs` and `sendEmail.routes.mjs` and sets them up on the Express application. It also handles a root GET request&#8203;.

5. `sendEmail.routes.mjs`: This file handles the route for sending an email. It validates the incoming request data and, if valid, sends an email via the SendGrid API&#8203;.

## How to Use

1. Clone this repository.
2. Install the dependencies using `npm install`.
3. Create a `.env` file in the root of your project and fill it with your SENDGRID_API_KEY and also the LIST_ID of the list you want to add contact to. Remember to replace the from and to emails by your actuals emails in the send email file.
4. Start the server using `npm start`.
5. You can now send a POST request to `http://localhost:<port>/contact/add` to add a new contact, or to `http://localhost:<port>/email/contactEmail` to send an email.

Please note that this project is still under development, and functionality may change in the future.

## Contribution

Contributions are welcome. Please submit a Pull Request, and ensure that your code passes our linting standards.

## License

This project is licensed under the MIT License.
