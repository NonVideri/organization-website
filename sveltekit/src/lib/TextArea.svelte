<script lang="ts">
	import { INPUT_CLASSES } from '$lib/classes';

	export let name = '';
	export let placeholder = '';
	export let required = false;
</script>

<textarea {name} {placeholder} {required} class={INPUT_CLASSES} />
