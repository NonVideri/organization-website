<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		isLight?: boolean;
		children?: import('svelte').Snippet;
	}

	let { isLight = false, children }: Props = $props();
</script>

<button
	type="submit"
	class={cn(
		'px-6 py-4 text-lg border-none rounded-md cursor-pointer font-bold transition-all duration-200',
		isLight
			? 'bg-primary-800 hover:bg-primary-700'
			: 'text-black bg-secondary-500 hover:bg-secondary-400'
	)}>
	{@render children?.()}
</button>
