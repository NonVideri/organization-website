import { fail } from '@sveltejs/kit';
import pb from '$lib/pocketbase';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name');
		if (!name) return fail(400, { message: 'Name is required' });

		const email = data.get('email');
		if (!email) return fail(400, { message: 'Email is required' });

		if (!data.get('accepted'))
			return fail(400, { message: 'You must accept the terms and conditions' });

		try {
			await pb
				.collection('subscriptions')
				.create({ name: data.get('name'), email: data.get('email') });
		} catch (error: any) {
			console.error(error);
			return fail(500, { message: error.response.message });
		}

		return { success: true };
	},
};
