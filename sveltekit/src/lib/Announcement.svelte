<script lang="ts">
	import Header from './Header.svelte';
	import Paragraph from './Paragraph.svelte';
	import Section from './Section.svelte';

	export let title: string;
	export let message: string | null = null;
</script>

<Section>
	<Header>{title}</Header>
	{#if message}
		<Paragraph>{message}</Paragraph>
	{/if}
	<slot />
</Section>
