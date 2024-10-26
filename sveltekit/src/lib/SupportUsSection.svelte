<script>
	import { Routes } from '$lib/constants';
	import Header from '$lib/Header.svelte';
	import Link from '$lib/Link.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Section from '$lib/Section.svelte';

	export let isDark = false;
</script>

<Section {isDark}>
	<Header>Support us</Header>
	<Paragraph>Help us empower free people all around the world.</Paragraph>
	<Paragraph>
		<Link {isDark} href={Routes.DONATE}>
			Click here to see how you could support our activities.
		</Link>
	</Paragraph>
</Section>
