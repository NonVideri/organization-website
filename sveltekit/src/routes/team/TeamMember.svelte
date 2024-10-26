<script lang="ts">
	import Header from '../../lib/Header.svelte';
	import Link from '../../lib/Link.svelte';
	import Paragraph from '../../lib/Paragraph.svelte';

	export let photo: string;
	export let name: string;
	export let originalName: string | null = null;
	export let role: string;
	export let description: string;
	export let website: string | null = null;
</script>

<div class="flex flex-col items-center w-[33vw] xl:w-[25vw] my-4">
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
