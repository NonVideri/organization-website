<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<ul class="flex flex-col w-full shadow-2xl">
	{@render children?.()}
</ul>
