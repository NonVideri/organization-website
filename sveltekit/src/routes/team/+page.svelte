<script lang="ts">
	import SvelteSeo from "svelte-seo";

  import Header from "../../lib/Header.svelte";
	import Section from "../../lib/Section.svelte";
	import TeamMember from "./TeamMember.svelte";
	import { BASE_URL, Routes } from '$lib/constants';

	interface TeamMember {
		photo: string;
		name: string;
		originalName?: string;
		role: string;
		description: string;
		website?: string;
	}

	const teamMembers: TeamMember[] = [
		{
			photo: "/team/krzysztof-moszynski.jpg",
			name: "Krzysztof Moszyński",
			role: "Founder, President",
			description:
				"Holistic Life Coach @ The Total Ascent. Krzysztof brings systemic thinking to his clients, empowering them to transform their minds and lives through a pragmatic, client-oriented approach.",
			website: 'https://thetotalascent.org',
		},
		{
			photo: "/team/gabriel-jedrol.jpg",
			name: "Gabriel Jędrol",
			role: "Legal Consultant",
			description:
				"Tax lawyer and NGO project manager. Gabriel makes entepreneurs' lives easier by providing them with personalized legal solutions.",
			website: "https://www.linkedin.com/in/gabriel-jedrol/",
		},
	];

	const TITLE = "Our Team - Thriving Individuals Foundation";
  const DESCRIPTION = "Meet the dedicated team behind the Thriving Individuals Foundation, working towards empowering individuals and communities.";
  const URL = `${BASE_URL}${Routes.TEAM}`;
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
	<Header type="h1">Our Team</Header>

	<div class="flex flex-col lg:flex-row py-4 space-y-8 lg:space-y-0 lg:space-x-10">
		{#each teamMembers as member}
			<TeamMember {...member} />
		{/each}
	</div>
</Section>
