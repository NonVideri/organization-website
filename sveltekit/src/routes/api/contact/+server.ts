import { CONTACT_EMAIL_ADDRESS, TURNSTILE_SECRET } from '$env/static/private';
import type { RequestEvent } from '@sveltejs/kit';

export async function POST({ request, getClientAddress }: RequestEvent) {
	const { token } = await request.json();
	const ip = getClientAddress();

	let formData = new FormData();
	formData.append('secret', TURNSTILE_SECRET);
	formData.append('response', token);
	if (ip) {
		formData.append('remoteip', ip);
	}

	let verifyResponse;

	try {
		verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			body: formData,
			method: 'POST',
		});
	} catch (error) {
		return new Response(
			'Failed to verify you are not a bot. Please try again or use the contact form below.',
			{ status: 500 }
		);
	}

	const outcome = await verifyResponse.json();
	if (outcome.success) {
		return new Response(CONTACT_EMAIL_ADDRESS, { status: 200 });
	}
	return new Response(
		"You were verified as a bot. If it's a mistake, use the contact form below.",
		{ status: 403 }
	);
}
