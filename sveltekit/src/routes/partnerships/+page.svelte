<script>
	import { Routes } from '$lib/constants';
	import Header from '$lib/Header.svelte';
	import Link from '$lib/Link.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section isVisible>
	<Header>Our partnerships</Header>
	<Paragraph />
</Section>

<Section isDark>
	<Header>Joint projects</Header>
	<Paragraph>
		To see our joint projects with other people and organizations,
		<Link href={Routes.PROJECTS_JOINT} isDark>click here</Link>.
	</Paragraph>
</Section>
<!-- 
<Section>
  <Header>Our affiliations</Header>
  <Paragraph></Paragraph>
</Section>
-->
