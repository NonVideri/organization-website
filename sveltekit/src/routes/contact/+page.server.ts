import { fail, type Actions, type RequestEvent } from '@sveltejs/kit';
import pb from '$lib/pocketbase';

export const actions: Actions = {
	default: async ({ request }: RequestEvent) => {
		const data = await request.formData();

    const email = String(data.get('email'));
    if (!email) return fail(400, { message: 'Email is required' });

		const subject = String(data.get('subject'));
    if (!subject) return fail(400, { message: 'Subject is required' });

    const message = String(data.get('message'));
    if (!message) return fail(400, { message: 'Message is required' });

    if (!data.get('accepted'))
      return fail(400, { message: 'You must accept the terms and conditions' });

		try {
      await pb.collection('contacts').create({ email, subject, message });
    } catch (error: any) {
			console.error(error);
			return fail(500, { message: error.response.message });
		}

		return { success: true };
	},
};
