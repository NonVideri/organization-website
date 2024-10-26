import pb from '$lib/pocketbase';

export async function load({ url }) {
	const id = url.searchParams.get('id');

	if (!id) {
		return { message: 'Subscription ID is required' };
	}

	try {
		await pb.collection('subscriptions').update(id, { confirmed: true });
		return { successful: true };
	} catch (error: any) {
		console.error(error);
		return { message: JSON.stringify(error.data.message) };
	}
}
