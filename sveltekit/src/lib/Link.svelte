<script lang="ts">
	import { cn } from './utils';

	export let href: string;
	let className = '';
	export { className as class };
	export let target = '';
	export let rel = '';
	export let isLight = false;
</script>

<a
	{href}
	{target}
	{rel}
	class={cn(
		'hover:underline font-semibold transition-all duration-200',
		isLight
			? 'text-primary-400 hover:text-primary-700'
			: 'text-secondary-400 hover:text-secondary-300',
		className
	)}>
	<slot />
</a>
