<script lang="ts">
	import { cn } from './utils';

	export let isDark = false;
</script>

<div class={cn('pt-6 md:pt-10 xl:pt-12 2xl:pt-20 w-full', isDark && 'bg-surface-800')} />
