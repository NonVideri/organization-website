<script lang="ts">
	import type { SubmitFunction } from '@sveltejs/kit';

	import { enhance } from '$app/forms';
	import { PUBLIC_FORUM_URL } from '$env/static/public';
	import Header from '$lib/Header.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Section from '$lib/Section.svelte';
	import Input from '$lib/Input.svelte';
	import Link from '$lib/Link.svelte';
	import { setAlert } from '$lib/alert.store';
	import { Routes } from '$lib/constants';
	import { cn } from '$lib/utils';
	import { FORM_CLASSES } from '$lib/classes';
	import SubmitButton from '$lib/SubmitButton.svelte';

	let forumElement: HTMLAnchorElement;

	const handleSubmit: SubmitFunction = ({ formData, cancel }) => {
		if (!formData.get('accepted')) {
			setAlert('Please accept the terms & conditions', 'warning');
			cancel();
			return;
		}

		return ({ result, update }) => {
			if (result.type === 'success') {
				setAlert('Almost there! Please check your email to confirm the subscription.', 'success');
				forumElement.scrollIntoView({ behavior: 'smooth' });
				return update();
			}

			if (result.type === 'failure') {
				setAlert(
					`An error occurred${
						result.data ? `: ${result.data.message}` : '.'
					} Please try again later.`
				);
				cancel();
			}
		};
	};
</script>

<Section isVisible>
	<Header>Join our elite mailing list</Header>
	<Paragraph type="small">
		We only send occasional emails with the most important updates. We will never spam you.
	</Paragraph>
	<form
		class={cn(FORM_CLASSES, 'w-full max-w-md my-6')}
		method="POST"
		action={`?${Routes.SUBSCRIBE}`}
		use:enhance={handleSubmit}>
		<Input type="text" name="name" placeholder="Name *" required />
		<Input type="email" name="email" placeholder="Email *" required />

		<div class="checkbox-container">
			<Paragraph class="my-0 py-0">
				<label class="flex items-center">
					<input type="checkbox" name="accepted" class="w-5 h-5 mr-4" />
					Accept&nbsp;<Link href={Routes.TERMS_AND_CONDITIONS}>Terms & Conditions</Link>
				</label>
			</Paragraph>
		</div>

		<SubmitButton>Subscribe</SubmitButton>
	</form>
</Section>

<Section>
	<Header>Join our private community</Header>
	<Paragraph>Interact with ambitious Individuals from all around the world:</Paragraph>
	<a
		class="block rounded-xl mt-4 md:mt-6 lg:mt-8 bg-white"
		href={PUBLIC_FORUM_URL}
		target="_blank"
		rel="noopener noreferrer"
		bind:this={forumElement}>
		<img
			id="home"
			src="/logo-forum.png"
			alt="Thriving Individuals Community Logo"
			class="mx-auto rounded-lg hover:opacity-90 transition-opacity duration-200" />
	</a>
</Section>
