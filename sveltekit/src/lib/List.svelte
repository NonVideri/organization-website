<script lang="ts">
	import { cn } from './utils';
	import type { Item } from './types';
	import ListItem from './ListItem.svelte';
	import type { ClassValue } from 'clsx';

	
	interface Props {
		class?: ClassValue;
		items?: Item[];
		children?: import('svelte').Snippet;
	}

	let { class: className = undefined, items = [], children }: Props = $props();
</script>

<ol class={cn('list-decimal my-2', className)}>
	{#each items as item}
		<ListItem {...item} />
	{/each}
	{@render children?.()}
</ol>
