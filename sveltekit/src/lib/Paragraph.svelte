<script lang="ts">
	import type { ClassValue } from 'clsx';
	import { type ParagraphType } from './types';
	import { PARAGRAPH_SIZE_CLASSES } from './classes';
	import { cn } from './utils';

	export let id = '';
	export let type: ParagraphType = 'normal';
	export let isData = false;
	export let isCentered = false;
	export let isBold = false;
	let className: ClassValue = undefined;
	export { className as class };
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
	<slot />
</p>
