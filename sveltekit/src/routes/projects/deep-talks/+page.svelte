<script lang="ts">
	import { Routes } from '$lib/constants';
	import Header from '$lib/Header.svelte';
	import Image from '$lib/Image.svelte';
	import Link from '$lib/Link.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Section from '$lib/Section.svelte';
	import SupportUsSection from '$lib/SupportUsSection.svelte';
</script>

<Section isVisible>
	<Header type="h1">Deep Talks</Header>
	<Paragraph
		>Unlike the <Link href={Routes.PROJECTS_SELF_IMPROVEMENT_MEETUP} target="_blank"
			>Self-Improvement Meetup</Link
		>, Deep Talks is a closed integration, circling & mastermind event for the members of the
		Thriving Individuals community. The participants have the opportunity to meet and talk in
		high-trust environment, and figure out solutions to their current challenges with the rest of
		the group.</Paragraph>
	<Paragraph
		>Deep Talks is a place where our members can be vulnerable with their share our deepest
		thoughts, and difficult experiences, and get constructive feedback from the community. It
		creates a space of sharing — something much needed in the modern world.
	</Paragraph>
	<Paragraph>
		We believe that the more alienated the society, the easier it is to enslave it. Networks of
		trust and relationships create natural enclaves of autonomy from government power. This is why
		totalitarian governments always try to destroy these connections. By establishing spaces of
		honesty, listening, and understanding, we are creating natural bastions of immunity against
		tyranny and propaganda.
	</Paragraph>
	<Image src="/projects/deep-talks.png" alt="Deep Talks" />
</Section>

<SupportUsSection isDark />
