import { fail, type Actions, type RequestEvent } from '@sveltejs/kit';
import mailer from '$lib/server/mailer';
import { CONTACT_EMAIL_ADDRESS, FROM_EMAIL_ADDRESS } from '$env/static/private';

export const actions: Actions = {
	default: async ({ request }: RequestEvent) => {
		const data = await request.formData();
		const email = String(data.get('email'));
		const subject = String(data.get('subject'));
		const message = String(data.get('message'));

		try {
			await mailer.sendMail({
				from: FROM_EMAIL_ADDRESS,
				to: CONTACT_EMAIL_ADDRESS,
				subject: `CONTACT: ${subject}`,
				text: `Sender: ${email}
            Subject: ${subject}
            Message: ${message}`,
				html: `<p><b>Sender:</b> ${email}</p>
            <p><b>Subject:</b> ${subject}</p>
            <p><b>Message:</b> ${message}</p>`,
			});
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Failed to send email.' });
		}

		return { success: true };
	},
};
