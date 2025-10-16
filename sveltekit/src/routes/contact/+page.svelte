<script lang="ts">
	import SvelteSeo from "svelte-seo";
	import ClipboardButton from "$lib/ClipboardButton.svelte";
	import { PUBLIC_CONTACT_EMAIL_ADDRESS } from "$env/static/public";
	import {
		BASE_URL,
		Routes,
		THRIVING_INDIVIDUALS_IBAN,
		THRIVING_INDIVIDUALS_NIP,
		THRIVING_INDIVIDUALS_REGON,
	} from "$lib/constants";
	import Header from "$lib/Header.svelte";
	import Link from "$lib/Link.svelte";
	import Paragraph from "$lib/Paragraph.svelte";
	import Section from "$lib/Section.svelte";

	const TITLE = "Contact Us - Thriving Individuals Foundation";
	const DESCRIPTION =
		"Get in touch with the Thriving Individuals Foundation. Find our contact details and reach out with your inquiries.";
	const URL = `${BASE_URL}${Routes.CONTACT}`;
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
	}} />

<Section isVisible>
	<Header type="h1">Contact us</Header>
	<Paragraph
		>Email: <ClipboardButton copy={PUBLIC_CONTACT_EMAIL_ADDRESS}
			>{PUBLIC_CONTACT_EMAIL_ADDRESS}</ClipboardButton
		></Paragraph>
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
		>IBAN: <ClipboardButton copy={THRIVING_INDIVIDUALS_IBAN.replace(/\s+/g, "")}
			>{THRIVING_INDIVIDUALS_IBAN}</ClipboardButton
		></Paragraph>
	<Paragraph isData
		>SWIFT/BIC: <ClipboardButton copy="NESBPLPW">NESBPLPW</ClipboardButton> (Nest Bank)</Paragraph>
	<Paragraph><Link href={Routes.SUPPORT}>See other ways to support us.</Link></Paragraph>
</Section>
