<script lang="ts">
	import { cn } from './utils';
	import type { Item } from './types';
	import ListItem from './ListItem.svelte';
	import type { ClassValue } from 'clsx';

	let className: ClassValue = undefined;
	export { className as class };
	export let items: Item[] = [];
</script>

<ol class={cn('list-decimal my-2', className)}>
	{#each items as item}
		<ListItem {...item} />
	{/each}
	<slot />
</ol>
