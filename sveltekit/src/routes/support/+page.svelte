<script lang="ts">
	import SvelteSeo from "svelte-seo";
	import { BASE_URL, Routes } from '$lib/constants';

	import Header from '../../lib/Header.svelte';
	import Paragraph from '../../lib/Paragraph.svelte';
	import Section from '../../lib/Section.svelte';
	import Link from '../../lib/Link.svelte';
	import CryptoWallet from './CryptoWallet.svelte';
	import {
		PUBLIC_PAYPAL_ADDRESS,
		PUBLIC_BITCOIN_ADDRESS,
		PUBLIC_MONERO_ADDRESS,
		PUBLIC_ETHEREUM_ADDRESS,
		PUBLIC_SOLANA_ADDRESS,
		PUBLIC_CARDANO_ADDRESS,
	} from '$env/static/public';
	import ClipboardButton from '../../lib/ClipboardButton.svelte';
	import { THRIVING_INDIVIDUALS_IBAN } from '../../lib/constants';
	import type { SubmitFunction } from '@sveltejs/kit';

	import { enhance } from '$app/forms';
	import Input from '$lib/Input.svelte';
	import { setAlert } from '$lib/alert.store';
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
					} Please try again later.`,
				);
				cancel();
			}
		};
	};

	const CRYPTO_WALLETS = [
		{
			name: 'Bitcoin',
			address: PUBLIC_BITCOIN_ADDRESS,
			logo: '/logos/bitcoin.svg',
		},
		{
			name: 'Monero',
			address: PUBLIC_MONERO_ADDRESS,
			logo: '/logos/monero.svg',
		},
		{
			name: 'Ethereum',
			address: PUBLIC_ETHEREUM_ADDRESS,
			logo: '/logos/ethereum.svg',
		},
		{
			name: 'Solana',
			address: PUBLIC_SOLANA_ADDRESS,
			logo: '/logos/solana.svg',
		},
		{
			name: 'Cardano',
			address: PUBLIC_CARDANO_ADDRESS,
			logo: '/logos/cardano.svg',
		},
	];

	const TITLE = "Support Us - Thriving Individuals Foundation";
  const DESCRIPTION = "Help support the mission of the Thriving Individuals Foundation. Learn about ways you can contribute and make a difference.";
  const URL = `${BASE_URL}${Routes.SUPPORT}`;
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

<Section>
	<Header type="h1">Support us</Header>
	<Paragraph>
		If you resonate with our mission, you can support us using the following means:
	</Paragraph>
</Section>

<Section>
	<Header type="h2">1. Bank transfer</Header>
	<Paragraph isData>Thriving Individuals Foundation</Paragraph>
	<Paragraph isData
		>IBAN: <ClipboardButton copy={THRIVING_INDIVIDUALS_IBAN.replace(/\s+/g, '')}
			>{THRIVING_INDIVIDUALS_IBAN}</ClipboardButton
		></Paragraph>
	<Paragraph isData
		>SWIFT/BIC: <ClipboardButton copy="NESBPLPW">NESBPLPW</ClipboardButton> (Nest Bank)</Paragraph>
</Section>

{#if PUBLIC_PAYPAL_ADDRESS}
	<Section>
		<Header type="h2">2. PayPal</Header>
		<Paragraph>
			<p>PayPal account: <Link href={PUBLIC_PAYPAL_ADDRESS}>Link</Link></p>
			<p>(Paypal takes a 5% commission from all donations.)</p>
		</Paragraph>
	</Section>
{/if}

{#if CRYPTO_WALLETS.some(({ address }) => address)}
	<Section>
		<Header type="h2">3. Cryptocurrency</Header>

		{#each CRYPTO_WALLETS as { name, address, logo }}
			{#if address}
				<CryptoWallet {name} {address} {logo} />
			{/if}
		{/each}
	</Section>
{/if}

<Section>
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
