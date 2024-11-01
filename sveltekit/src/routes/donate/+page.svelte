<script>
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
</script>

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
