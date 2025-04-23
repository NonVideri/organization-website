<script lang="ts">
	import { onMount } from 'svelte';
	import { SECTION_CLASSES } from './classes';
	import type { ClassValue } from 'clsx';
	import { cn } from './utils';

	let section: HTMLElement = $state();

  interface Props {
		id?: string;
		class?: ClassValue;
		isVisible?: boolean;
		isData?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		id = '',
		class: className = undefined,
		isVisible = $bindable(false),
		isData = false,
		children
	}: Props = $props();

	onMount(() => {
		let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
						isVisible = true;
					}
					// else if (
					// 	!entry.isIntersecting ||
					// 	(entry.isIntersecting && entry.intersectionRatio <= 0.3)
					// ) {
					// 	isVisible = false;
					// }
				});
			},
			{
				threshold: [0.3, 0.5],
			}
		);

		observer.observe(section);
	});
</script>

<section
	bind:this={section}
	{id}
	class={cn(
		'w-full px-6 md:px-10 xl:px-16 2xl:px-24 mb-6 md:mb-10 xl:mb-16 2xl:mb-24',
		isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'
	)}>
	<div
		class={cn(
			'py-12 md:py-16 xl:py-24 px-16 sm:px-16 md:px-20 lg:px-40 xl:px-64 2xl:px-80 bg-surface-800 selection:bg-primary-500 selection:text-black',
			SECTION_CLASSES,
			isData && 'items-start',
			className
		)}>
		{@render children?.()}
	</div>
</section>
