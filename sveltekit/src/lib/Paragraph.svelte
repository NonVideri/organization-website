<script lang="ts">
	import type { ClassValue } from 'clsx';
	import { type ParagraphType } from './types';
	import { PARAGRAPH_SIZE_CLASSES } from './classes';
	import { cn } from './utils';

	interface Props {
		id?: string;
		type?: ParagraphType;
		isData?: boolean;
		isCentered?: boolean;
		isBold?: boolean;
		class?: ClassValue;
		children?: import('svelte').Snippet;
	}

	let {
		id = '',
		type = 'normal',
		isData = false,
		isCentered = false,
		isBold = false,
		class: className = undefined,
		children
	}: Props = $props();
	
</script>

<p
	{id}
	class={cn(
		PARAGRAPH_SIZE_CLASSES[type],
		isData ? 'leading-relaxed' : 'my-1 md:my-2 leading-relaxed',
		isCentered && 'self-center',
		isBold && 'font-semibold',
		className
	)}>
	{@render children?.()}
</p>
