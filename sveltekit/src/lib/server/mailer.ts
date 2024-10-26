import { SMTP_LOGIN, SMTP_PASSWORD } from '$env/static/private';
import { createTransport } from 'nodemailer';

const transporter = createTransport({
	host: 'smtp-relay.brevo.com',
	port: 587,
	auth: {
		user: SMTP_LOGIN,
		pass: SMTP_PASSWORD,
	},
});

transporter.verify((error, success) => {
	if (error) {
		console.error(error);
	} else {
		console.log('Server is ready to take our messages');
	}
});

export default transporter;
