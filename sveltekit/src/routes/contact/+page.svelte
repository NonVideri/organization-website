<script lang="ts">
	import { enhance } from '$app/forms';
	import { setAlert } from '$lib/alert.store';
	import { FORM_CLASSES } from '$lib/classes';
	import ClipboardButton from '$lib/ClipboardButton.svelte';
	import {
		Routes,
		THRIVING_INDIVIDUALS_IBAN,
		THRIVING_INDIVIDUALS_NIP,
		THRIVING_INDIVIDUALS_REGON,
	} from '$lib/constants';
	import Header from '$lib/Header.svelte';
	import Input from '$lib/Input.svelte';
	import Link from '$lib/Link.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Section from '$lib/Section.svelte';
	import SubmitButton from '$lib/SubmitButton.svelte';
	import TermsAndConditionsCheckbox from '$lib/TermsAndConditionsCheckbox.svelte';
	import TextArea from '$lib/TextArea.svelte';
	import { cn } from '$lib/utils';
	import type { SubmitFunction } from '@sveltejs/kit';

	let email = '';
	let error = '';

	async function onSuccess(token: string) {
		try {
			const response = await fetch(Routes.API_CONTACT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ token }),
			});

			if (response.ok) {
				console.log('response OK');
				email = await response.json();
			} else {
				console.log('response not OK');
				error = await response.text();
			}
		} catch (err: any) {
			error = err.body;
		}
	}

	function onFailure() {
		error = 'Failed to verify you are not a bot. Please try again or contact us through the form.';
	}

	const handleSubmit: SubmitFunction = ({ formData, cancel }) => {
		return ({ result, update }) => {
			if (result.type === 'success') {
				setAlert('Message sent!', 'success');
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

<svelte:head>
	<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<Section isVisible>
	<Header type="h1">Contact information</Header>
	<div
		class="cf-turnstile"
		data-sitekey="0x4AAAAAAAj_phNsBEbR3uvS"
		data-callback={onSuccess}
		data-error-callback={onFailure} />
	{#if email}
		<ClipboardButton copy={email}>{email}</ClipboardButton>
	{/if}
	{#if error}
		<Paragraph class="text-error-800 text-wa">{error}</Paragraph>
	{/if}
</Section>

<Section isVisible>
	<Header>Contact form</Header>
	<form
		class={cn(FORM_CLASSES, 'w-full max-w-md my-6')}
		method="POST"
		use:enhance={handleSubmit}>
		<Input type="email" name="email" placeholder="Email" required />
		<Input name="subject" placeholder="Subject" required />
		<TextArea name="message" placeholder="Message" required />
    <TermsAndConditionsCheckbox />
    
		<SubmitButton>Send</SubmitButton>
	</form>
</Section>

<Section isData>
	<Header isCentered>Legal information</Header>
	<Paragraph isCentered>
		Thriving Individuals Foundation is a non-profit organization registered in Poland.
	</Paragraph>
	<br />
	<Paragraph isData>
		NIP: <ClipboardButton copy={THRIVING_INDIVIDUALS_NIP}
			>{THRIVING_INDIVIDUALS_NIP}</ClipboardButton>
	</Paragraph>
	<Paragraph isData
		>REGON: <ClipboardButton copy={THRIVING_INDIVIDUALS_REGON}
			>{THRIVING_INDIVIDUALS_REGON}</ClipboardButton
		></Paragraph>
	<Paragraph isData isBold class="mt-2">Banking information:</Paragraph>
	<Paragraph isData>Thriving Individuals Foundation</Paragraph>
	<Paragraph isData
		>IBAN: <ClipboardButton copy={THRIVING_INDIVIDUALS_IBAN.replace(/\s+/g, '')}
			>{THRIVING_INDIVIDUALS_IBAN}</ClipboardButton
		></Paragraph>
	<Paragraph isData
		>SWIFT/BIC: <ClipboardButton copy="NESBPLPW">NESBPLPW</ClipboardButton> (Nest Bank)</Paragraph>
	<Paragraph>See other ways to support us <Link href={Routes.DONATE}>here</Link>.</Paragraph>
</Section>
