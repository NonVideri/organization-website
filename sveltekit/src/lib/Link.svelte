<script lang="ts">
	import { cn } from './utils';

	export let href: string;
	let className = '';
	export { className as class };
	export let target = '';
	export let rel = '';
	export let isDark = false;
</script>

<a
	{href}
	{target}
	{rel}
	class={cn(
		'hover:underline font-semibold transition-all duration-200',
		isDark
			? 'text-primary-400 hover:text-primary-600'
			: 'text-secondary-500 hover:text-secondary-700',
		className
	)}>
	<slot />
</a>
