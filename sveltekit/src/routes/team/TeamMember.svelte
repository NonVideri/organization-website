<script lang="ts">
	import Header from '../../lib/Header.svelte';
	import Link from '../../lib/Link.svelte';
	import Paragraph from '../../lib/Paragraph.svelte';

	interface Props {
		photo: string;
		name: string;
		originalName?: string | null;
		role: string;
		description: string;
		website?: string | null;
	}

	let {
		photo,
		name,
		originalName = null,
		role,
		description,
		website = null
	}: Props = $props();
</script>

<div class="flex flex-col items-center w-full lg:w-[33vw] my-4">
	<img src={photo} alt={name} class="rounded-full w-32 h-32 mx-auto mb-4" />
	<Header type="h3" class="mb-0">{name}</Header>
	{#if originalName}
		<Paragraph type="small" class="mt-px">({originalName})</Paragraph>
	{/if}
	<Paragraph type="small" class="mt-0.5">{role}</Paragraph>
	<Paragraph class="text-center">{description}</Paragraph>
	{#if website}
		<Paragraph type="small" class="mt-1"><Link href={website}>Website</Link></Paragraph>
	{/if}
</div>
