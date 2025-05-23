<script lang="ts">
	import type { SubmitFunction } from '@sveltejs/kit';
	import SvelteSeo from "svelte-seo";
	import { enhance } from '$app/forms';
	import Header from '$lib/Header.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Section from '$lib/Section.svelte';
	import Input from '$lib/Input.svelte';
	import { setAlert } from '$lib/alert.store';
	import { BASE_URL, Routes } from '$lib/constants';
	import { cn } from '$lib/utils';
	import { FORM_CLASSES } from '$lib/classes';
	import SubmitButton from '$lib/SubmitButton.svelte';
	import TermsAndConditionsCheckbox from '$lib/TermsAndConditionsCheckbox.svelte';

	const handleSubmit: SubmitFunction = ({ formData, cancel }) => {
		if (!formData.get('accepted')) {
			setAlert('Please accept the terms & conditions', 'warning');
			cancel();
			return;
		}

		return ({ result, update }) => {
			if (result.type === 'success') {
				setAlert('Almost there! Please check your email to confirm the subscription.', 'success');
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

  const TITLE = "Join Us - Thriving Individuals Foundation";
  const DESCRIPTION = "Get involved with the Thriving Individuals Foundation. Learn how you can contribute to our mission and join our community.";
  const URL = `${BASE_URL}${Routes.JOIN}`;
</script>

<SvelteSeo
  title={TITLE}
  description={DESCRIPTION}
  canonical={URL}
  openGraph={{
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
  }}
/>

<Section isVisible>
	<Header>Join our elite mailing list</Header>
	<Paragraph type="small">
		We only send occasional emails with the most important updates. We will never spam you.
	</Paragraph>
	<form
		class={cn(FORM_CLASSES, 'w-full max-w-md my-6')}
		method="POST"
		action={Routes.SUBSCRIBE}
		use:enhance={handleSubmit}>
		<Input type="text" name="name" placeholder="Name *" required />
		<Input type="email" name="email" placeholder="Email *" required />
    <TermsAndConditionsCheckbox />

		<SubmitButton>Subscribe</SubmitButton>
	</form>
</Section>
