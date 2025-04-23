<script lang="ts">
	import type { ClassValue } from 'clsx';
	import { cn } from './utils';

	
	interface Props {
		type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
		class?: ClassValue;
		isCentered?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		type = 'h2',
		class: className = undefined,
		isCentered = false,
		children
	}: Props = $props();
	const HEADER_CLASSES = cn('md:mx-5 font-semibold', isCentered && 'self-center');
</script>

{#if type === 'h1'}
	<h1
		class={cn(
			'text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-2 md:mb-5',
			HEADER_CLASSES,
			className
		)}>
		{@render children?.()}
	</h1>
{:else if type === 'h2'}
	<h2
		class={cn(
			'text-xl md:text-2xl xl:text-3xl 2xl:text-4xl mb-2 md:mb-5',
			HEADER_CLASSES,
			className
		)}>
		{@render children?.()}
	</h2>
{:else if type === 'h3'}
	<h3
		class={cn(
			'text-lg md:text-xl xl:text-2xl 2xl:text-3xl mb-1 md:mb-3',
			HEADER_CLASSES,
			className
		)}>
		{@render children?.()}
	</h3>
{:else if type === 'h4'}
	<h4
		class={cn(
			'text-base md:text-lg xl:text-xl 2xl:text-2xl mb-1 md:mb-2',
			HEADER_CLASSES,
			className
		)}>
		{@render children?.()}
	</h4>
{:else if type === 'h5'}
	<h5
		class={cn(
			'text-sm md:text-base xl:text-lg 2xl:text-xl mb-0.5 md:mb-1',
			HEADER_CLASSES,
			className
		)}>
		{@render children?.()}
	</h5>
{:else if type === 'h6'}
	<h6 class={cn('text-xs md:text-sm xl:text-base 2xl:text-lg mb-0.5', HEADER_CLASSES, className)}>
		{@render children?.()}
	</h6>
{/if}
