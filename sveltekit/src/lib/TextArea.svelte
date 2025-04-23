<script lang="ts">
	import { INPUT_CLASSES } from '$lib/classes';

	interface Props {
		name?: string;
		placeholder?: string;
		required?: boolean;
	}

	let { name = '', placeholder = '', required = false }: Props = $props();
</script>

<textarea {name} {placeholder} {required} class={INPUT_CLASSES}></textarea>
