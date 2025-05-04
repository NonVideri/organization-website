<script>
	import Header from '$lib/Header.svelte';
	import Image from '$lib/Image.svelte';
	import Link from '$lib/Link.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Section from '$lib/Section.svelte';
	import SupportUsSection from '$lib/SupportUsSection.svelte';
	import SvelteSeo from "svelte-seo";
	import { BASE_URL, Routes } from '$lib/constants';

  const TITLE = "Joint projects - Thriving Individuals Foundation";
  const DESCRIPTION = "Learn about the joint projects of the Thriving Individuals Foundation.";
  const URL = `${BASE_URL}${Routes.PROJECTS_JOINT}`;
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
	<Header type="h1">Joint projects</Header>
	<Paragraph>
		To achieve greater impact, we frequently partner with organizations that could help us in
		achieving our goals, and people who share our values.
	</Paragraph>
	<!-- <Paragraph>
		To see our organizational partnerships, <Link href={Routes.PARTNERSHIPS}>click here</Link>.
	</Paragraph> -->
</Section>

<Section>
	<Header>Cycle Freedom</Header>
	<Paragraph>
		Cycle is a yearly entrepreneurship camp in Lithuania. It is extremely practical and
		workshop-oriented, and teaches not only business skills, but most of all entrepreneurial
		thinking.
	</Paragraph>
	<Paragraph>
		It is founded and run by a group of successful international businessmen, who have built their
		businesses from scratch, and are sharing their experience with the next generation of
		entrepreneurs. The knowledge is free of charge, the participants only have to pay for food and
		lodging at an inexpensive resort in Lithuania, and cover their travel costs.
	</Paragraph>
	<Paragraph>
		The philosophy of Cycle Freedom is that financial freedom is a key component of personal
		freedom, and that entrepreneurship is the best way to achieve it. This is a perspective that we
		deeply share.
	</Paragraph>
	<Paragraph>
		Thriving Individuals are proud to support the camp, promoting it, and sending our members every
		year to help them accelerate their wealth creation journeys.
	</Paragraph>
	<Paragraph>
		To learn more about Cycle Freedom, <Link target="_blank" href="https://cyclefreedom.lt"
			>click here</Link
		>.
	</Paragraph>
	<Image src="/projects/cycle-freedom.png" alt="Cycle Freedom" />
</Section>

<Section>
	<Header>Rob Duffy's Coaching Practice</Header>
	<Paragraph>
		Rob Duffy is a professional "freedom coach", who specializes in helping people achieve their
		goals, and become more successful in their personal and professional lives.
	</Paragraph>
	<Paragraph>
		Multiple Thriving Individuals have pioneered in prototype editions of Rob's special growth
		programs such as "Smash Your Resistance", and have found them to be deeply transformative. We
		are proud to have Rob as a partner, and we recommend his services to our members.
	</Paragraph>
	<Paragraph>
		To learn more about Rob Duffy's coaching practice, <Link
			target="_blank"
			href="https://robduffy4coach.com">click here</Link
		>.
	</Paragraph>
	<Image src="/projects/rob-duffy.png" alt="Rob Duffy" />
</Section>

<SupportUsSection />
