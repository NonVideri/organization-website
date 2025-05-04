<script>
	import SvelteSeo from "svelte-seo";

	import Header from '$lib/Header.svelte';
	import List from '$lib/List.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Section from '$lib/Section.svelte';
	import Link from '$lib/Link.svelte';
	import { BASE_URL, Routes } from '$lib/constants';

  const TITLE = "Our Framework - Thriving Individuals Foundation";
  const DESCRIPTION = "Explore the framework that guides the Thriving Individuals Foundation's approach to empowerment, freedom, and community building.";
  const URL = `${BASE_URL}${Routes.FRAMEWORK}`;
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
	<Header>Practical Freedom Framework</Header>
	<Paragraph>
		This is a range of skills and competences we are teaching and promoting at Thriving Individuals.
		It is meant to contain essential skills necessary to be a free & self-reliant man in the modern
		era. The list is NOT exhaustive.
	</Paragraph>
	<List
		items={[
			{
				title: 'Inner Strength',
				description:
					'mental health, dealing with stress & trauma, emotional intelligence, freedom from addictions, \
        attachments, propaganda, developing virtues, living with truth and meaning.',
			},
			{
				title: 'Physical Flourishing',
				description:
					'healthy body, free from toxins, basics of physical exercise, sleep optimization, healthy diet, \
        biohacking.',
			},
			{
				title: 'Agency',
				description:
					'effective thinking, decision making and action, life optimization, attention & distraction \
        management, space management, knowledge & information management, lifehacking.',
			},
			{
				title: 'Relationships & Cooperation',
				description:
					'healthy communication, building friendships and connection, cooperation & leadership, organic \
        organization, building local communities.',
			},
			{
				title: 'Free Families',
				description: 'parenting, freedom education, homeschooling, unschooling.',
			},
			{
				title: 'Wealth Creation',
				description:
					'financial intelligence, entrepreneurship, tax optimization, investing, Blockchain & DeFi knowledge, new finances.',
			},
			{
				title: 'Technological Proficiency',
				description:
					'computer literacy, technological knowledge, cybersecurity & privacy, secure communication.',
			},
			{
				title: 'Security Self-Reliance',
				description: 'basic security skills, opsec, self-defense, arms, legal knowledge.',
			},
			{
				title: 'Material Independence',
				description: 'survival skills, prepping, sustainability, material resilience.',
			},
			{
				title: 'Free Movement',
				description: 'relocation, nomading, residency optimization, free cities.',
			},
		]} />
	<Paragraph class="mt-4"
		>If you like what you see, feel free to <Link href={Routes.JOIN}>join our community</Link
		>.</Paragraph>
</Section>
