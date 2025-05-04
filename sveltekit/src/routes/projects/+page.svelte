<script>
	import { PROJECTS } from '$lib/constants';
	import Header from '$lib/Header.svelte';
	import Link from '$lib/Link.svelte';
	import List from '$lib/List.svelte';
	import ListItem from '$lib/ListItem.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Section from '$lib/Section.svelte';
	import SupportUsSection from '$lib/SupportUsSection.svelte';
	import SvelteSeo from "svelte-seo";
	import { BASE_URL, Routes } from '$lib/constants';

  const TITLE = "Our projects - Thriving Individuals Foundation";
  const DESCRIPTION = "Explore the projects of the Thriving Individuals Foundation. Learn about our initiatives and how we work to empower individuals and communities.";
  const URL = `${BASE_URL}${Routes.PROJECTS}`;
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
	<Header type="h1">Our projects</Header>
	<Paragraph
		>Our strategy revolves around empowering the individuals and communities who already value
		freedom. We focus on the "quality" of free people, rather than their "quantity".</Paragraph>
	<Paragraph
		>We prioritize the personal and practical over the abstract and theoretical. Through this
		approach, we foster pragmatic cooperation between freedom-lovers of different worldviews and
		backgrounds.</Paragraph>
</Section>

<Section isVisible>
	<Header>Current projects</Header>
	<List>
		{#each PROJECTS as { href, text }}
			<ListItem>
				<Link {href}>{text}</Link>
			</ListItem>
		{/each}
	</List>
</Section>

<SupportUsSection />
