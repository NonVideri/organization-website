<script lang="ts">
	import Announcement from '$lib/Announcement.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Link from '$lib/Link.svelte';
	import { PUBLIC_FORUM_URL } from '$env/static/public';
	import { Routes } from '$lib/constants';

	export let data;
</script>

{#if data.successful}
	<Announcement title="Subscription Confirmed" message="Thank you for joining us!">
		<Paragraph
			>You are invited to join our community at the&nbsp;<Link href={PUBLIC_FORUM_URL}
				>Thriving Individuals Forums</Link
			>.</Paragraph>
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
