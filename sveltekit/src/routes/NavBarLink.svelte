<script lang="ts">
	import { NAVBAR_LINK_CLASSES, PARAGRAPH_SIZE_CLASSES } from '$lib/classes';
	import { cn } from '../lib/utils';

	export let href = '';
	export let text = '';
	export let target = '';
	let showDropdown = false;

	function handleMouseEnter() {
		showDropdown = true;
	}

	function handleMouseLeave() {
		showDropdown = false;
	}
</script>

<button
	class="relative group flex-1"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
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
		<slot />
	</div>
</button>
