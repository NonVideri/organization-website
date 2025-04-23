<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Header from '$lib/Header.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import List from '$lib/List.svelte';
	import Link from '$lib/Link.svelte';
	import { Routes } from '$lib/constants';
	import SupportUsSection from '$lib/SupportUsSection.svelte';
</script>

<img id="home" src="/logo.png" alt="Thriving Individuals Logo" class="animate-fade-in w-[50%]" />

<Section class="mt-4 md:mt-6 xl:mt-8">
	<Header>About Us</Header>
	<Paragraph>
    We empower free people all around the world to achieve fulfillment and success in their lives.
	</Paragraph>
  <Paragraph>
    Our aim is to strengthen freedom by strengthening freedom-loving individuals.
  </Paragraph>
	<Paragraph>
		We embrace all aspects of human flourishing and the pursuit of virtue and excellence.
	</Paragraph>
	<Paragraph>
		<Link href={Routes.PROJECTS}>Learn more about our projects.</Link>
	</Paragraph>
</Section>

<Section>
	<Header>Our Vision</Header>
	<List
		items={[
			{
				title: 'Thriving Individuals',
				description:
					'Free people so powerful and influential, that they are impossible to enslave, and are allowed to unleash their full potential.',
			},
			{
				title: 'Thriving Communities',
				description:
					'Free communities so self-reliant and prosperous, that they are impossible to control, and are allowed to flourish in peace.',
			},
		]} />
</Section>

<Section>
	<Header>Our Mission</Header>
	<Paragraph>We make the world more free one person, and one community at a time.</Paragraph>
	<List
		items={[
			{
				title: 'Empowering Free Individuals',
				description:
					'We help free people grow, flourish, and become more powerful, influential, and self-reliant.',
			},
			{
				title: 'Empowering Free Communities',
				description:
					'We create sustainable foundations for free communities that can resist tyranny.',
			},
		]} />
</Section>

<Section>
	<Header>Our Values</Header>
	<List
		items={[
			{
				title: 'Freedom',
				description:
					'We embrace inner and outer freedom as an important aspect of human nature, and strive to peacefully live \
          and let live as free men and women.',
			},
			{
				title: 'Responsibility',
				description:
					'We take ownership of our lives, families, businesses, and communities, shaping our lives and the lives \
          of people close to us for the better.',
			},
			{
				title: 'Excellence',
				description:
					'We strive to grow and get better at who we are and what we do every single day, extending \
          our being and sphere of influence, and not being satisfied with mediocrity.',
			},
			{
				title: 'Empowerment',
				description:
					'We generously share the gift of our growth and freedom with others, who are able and willing to \
          walk a similar path of self-improvement and personal independence.',
			},
		]} />
</Section>

<SupportUsSection />