<script lang="ts">
	import Header from "../../lib/Header.svelte";
	import Section from "../../lib/Section.svelte";
	import TeamMember from "./TeamMember.svelte";

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
				"Life & excellence coach, software creator. Krzysztof brings systemic thinking to people's lives and minds, helping them discern and overcome their limitations, utilizing his multidisciplinary knowledge and various tools of practical psychology.",
			// website: 'https://moszynski.com',
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
</script>

<Section>
	<Header type="h1">Our Team</Header>

	<div class="flex flex-col md:flex-row py-4 space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6 xl:space-x-8">
		{#each teamMembers as member}
			<TeamMember {...member} />
		{/each}
	</div>
</Section>
