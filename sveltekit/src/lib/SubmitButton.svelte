<script lang="ts">
	import { cn } from '$lib/utils';

	export let isLight = false;
</script>

<button
	type="submit"
	class={cn(
		'px-6 py-4 text-lg border-none rounded-md cursor-pointer font-bold transition-all duration-200',
		isLight
			? 'bg-primary-800 hover:bg-primary-700'
			: 'text-black bg-secondary-500 hover:bg-secondary-400'
	)}>
	<slot />
</button>
