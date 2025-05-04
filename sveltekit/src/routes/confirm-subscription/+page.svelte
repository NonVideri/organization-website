<script lang="ts">
	import Announcement from '$lib/Announcement.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Link from '$lib/Link.svelte';
	import SvelteSeo from "svelte-seo";
	import { Routes } from '$lib/constants';

	let { data } = $props();
  const TITLE = "Confirm Subscription - Thriving Individuals Foundation";
  const DESCRIPTION = "Confirm your subscription to the Thriving Individuals Foundation newsletter.";
</script>

<SvelteSeo
  title={TITLE}
  description={DESCRIPTION}
/>

{#if data.successful}
	<Announcement title="Subscription Confirmed" message="Thank you for joining us!">
	</Announcement>
{:else}
	<Announcement title="Something went wrong">
		<Paragraph>
			We were unable to confirm your subscription. Please try again later or <Link
				href={Routes.CONTACT}>contact us</Link
			>.
		</Paragraph>
		<Paragraph>
			Error message: {data.message}
		</Paragraph>
	</Announcement>
{/if}
