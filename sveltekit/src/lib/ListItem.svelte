<script lang="ts">
	import { type ParagraphType } from './types';
	import { PARAGRAPH_SIZE_CLASSES } from './classes';
	import { cn } from './utils';

	interface Props {
		title?: string | undefined;
		description?: string | undefined;
		type?: ParagraphType;
		children?: import('svelte').Snippet;
	}

	let {
		title = undefined,
		description = undefined,
		type = 'normal',
		children
	}: Props = $props();
</script>

<li class={cn('my-2', PARAGRAPH_SIZE_CLASSES[type])}>
	{#if title}<strong>{title}</strong> —{" "}{/if}{#if description}{description}{/if}{@render children?.()}
</li>
