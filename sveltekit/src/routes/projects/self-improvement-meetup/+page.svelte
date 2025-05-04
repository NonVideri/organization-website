<script lang="ts">
	import SvelteSeo from "svelte-seo";

  import Header from '$lib/Header.svelte';
	import Image from '$lib/Image.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Section from '$lib/Section.svelte';
	import SupportUsSection from '$lib/SupportUsSection.svelte';
	import { BASE_URL, Routes } from '$lib/constants';

  const TITLE = "Self-Improvement Meetup - Thriving Individuals Foundation";
  const DESCRIPTION = "Learn about the Self-Improvement Meetup, an open learning & networking event for personal growth and community engagement.";
  const URL = `${BASE_URL}${Routes.PROJECTS_SELF_IMPROVEMENT_MEETUP}`;
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
	<Header type="h1">Self-Improvement Meetup</Header>
	<Paragraph>
		The Thriving Individuals Self-Improvement Meetup is an open learning & networking event. The
		participants have the opportunity to engage in various self-improvement workshops, exchange
		knowledge about personal growth, and get acquainted with our community. It often includes guest
		speakers who share their priceless knowledge with our members.
	</Paragraph>
	<Paragraph>
		The Meetup was the first successful initiative of Thriving Individuals. It still serves as our
		flagship project, opening our community to the external world and its opportunities.
	</Paragraph>
	<Paragraph>
		It also helps us establish our "brand", as we believe freedom should always be associated with
		excellence and creating value. Rather than just talking about freedom in theory, we show how to
		live it in practice and flourish. We present "free living" as a lifestyle that is not only
		possible but also desirable for every growth-oriented individual.
	</Paragraph>
	<Image src="/projects/self-improvement-meetup.png" alt="Self-Improvement Meetup" />
</Section>

<SupportUsSection />
