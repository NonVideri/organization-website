<script lang="ts">
	import { INPUT_CLASSES } from '$lib/classes';

	interface Props {
		type?: string;
		name?: string;
		placeholder?: string;
		required?: boolean;
	}

	let {
		type = 'text',
		name = '',
		placeholder = '',
		required = false
	}: Props = $props();

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<input use:typeAction {name} {placeholder} {required} class={INPUT_CLASSES} />
