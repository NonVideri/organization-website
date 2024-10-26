<script>
	import { PROJECTS, Routes } from '$lib/constants';
	import Header from '$lib/Header.svelte';
	import Link from '$lib/Link.svelte';
	import List from '$lib/List.svelte';
	import ListItem from '$lib/ListItem.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Section from '$lib/Section.svelte';
	import SupportUsSection from '$lib/SupportUsSection.svelte';
</script>

<Section isVisible>
	<Header type="h1">Our projects</Header>
	<Paragraph
		>Our strategy revolves around empowering the individuals and communities who already value
		freedom. We focus on the "quality" of free people, rather than their "quantity".</Paragraph>
	<Paragraph
		>We prioritize the personal and practical over the abstract and theoretical. Through this
		approach, we foster pragmatic cooperation between freedom-lovers of different worldviews and
		backgrounds.</Paragraph>
</Section>

<Section isDark isVisible>
	<Header>Current projects</Header>
	<List>
		{#each PROJECTS as { href, text }}
			<ListItem>
				<Link isDark {href}>{text}</Link>
			</ListItem>
		{/each}
	</List>
</Section>

<SupportUsSection />
