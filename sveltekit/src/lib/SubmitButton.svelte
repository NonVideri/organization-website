<script lang="ts">
	import { cn } from '$lib/utils';

	export let isDark = false;
</script>

<button
	type="submit"
	class={cn(
		'px-6 py-4 text-lg border-none rounded-md cursor-pointer font-bold transition-all duration-200',
		isDark
			? 'bg-primary-600 hover:bg-primary-400'
			: 'text-white bg-surface-800 hover:bg-surface-700'
	)}>
	<slot />
</button>
