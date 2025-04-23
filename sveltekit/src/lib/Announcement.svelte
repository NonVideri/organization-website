<script lang="ts">
	import Header from './Header.svelte';
	import Paragraph from './Paragraph.svelte';
	import Section from './Section.svelte';

	interface Props {
		title: string;
		message?: string | null;
		children?: import('svelte').Snippet;
	}

	let { title, message = null, children }: Props = $props();
</script>

<Section>
	<Header>{title}</Header>
	{#if message}
		<Paragraph>{message}</Paragraph>
	{/if}
	{@render children?.()}
</Section>
