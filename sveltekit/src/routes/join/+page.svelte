<script lang="ts">
	import SvelteSeo from "svelte-seo";
	import Section from "$lib/Section.svelte";
	import { BASE_URL, Routes } from "$lib/constants";
	import SubscribeForm from "$lib/SubscribeForm.svelte";

	const TITLE = "Join Us - Thriving Individuals Foundation";
	const DESCRIPTION =
		"Get involved with the Thriving Individuals Foundation. Learn how you can contribute to our mission and join our community.";
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
	}} />

<Section isVisible>
	<SubscribeForm />
</Section>
