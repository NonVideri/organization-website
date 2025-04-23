<script lang="ts">
	import { NAVBAR_LINK_CLASSES, PARAGRAPH_SIZE_CLASSES } from '$lib/classes';
	import { cn } from '../lib/utils';

	interface Props {
		href?: string;
		text?: string;
		target?: string;
		children?: import('svelte').Snippet;
	}

	let {
		href = '',
		text = '',
		target = '',
		children
	}: Props = $props();
	let showDropdown = $state(false);

	function handleMouseEnter() {
		showDropdown = true;
	}

	function handleMouseLeave() {
		showDropdown = false;
	}
</script>

<button
	class="relative group flex-1"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	aria-haspopup="true"
	aria-expanded={showDropdown}>
	<a
		{href}
		{target}
		class={cn(
			NAVBAR_LINK_CLASSES,
			PARAGRAPH_SIZE_CLASSES['large'],
			'w-full font-semibold no-underline'
		)}>
		{text}
	</a>

	<div
		class={cn(
			'absolute left-0 w-full transition-all duration-300 transform',
			showDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
		)}>
		{@render children?.()}
	</div>
</button>
