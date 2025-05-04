<script>
  import SvelteSeo from "svelte-seo";
	import { BASE_URL, Routes } from '$lib/constants';
	import Header from '$lib/Header.svelte';
	import Link from '$lib/Link.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Section from '$lib/Section.svelte';

  const TITLE = "Partnerships - Thriving Individuals Foundation";
  const DESCRIPTION = "Learn about partnership opportunities with the Thriving Individuals Foundation and how we collaborate with others.";
  const URL = `${BASE_URL}${Routes.PARTNERSHIPS}`;
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
	<Header>Our partnerships</Header>
	<Paragraph />
</Section>

<Section>
	<Header>Joint projects</Header>
	<Paragraph>
		To see our joint projects with other people and organizations,
		<Link href={Routes.PROJECTS_JOINT}>click here</Link>.
	</Paragraph>
</Section>
<!-- 
<Section>
  <Header>Our affiliations</Header>
  <Paragraph></Paragraph>
</Section>
-->
