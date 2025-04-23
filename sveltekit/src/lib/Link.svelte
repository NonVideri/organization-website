<script lang="ts">
	import { cn } from './utils';

	
	interface Props {
		href: string;
		class?: string;
		target?: string;
		rel?: string;
		isLight?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		href,
		class: className = '',
		target = '',
		rel = '',
		isLight = false,
		children
	}: Props = $props();
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
	{@render children?.()}
</a>
