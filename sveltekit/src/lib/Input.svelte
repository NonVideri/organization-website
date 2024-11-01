<script lang="ts">
	import { INPUT_CLASSES } from '$lib/classes';

	export let type = 'text';
	export let name = '';
	export let placeholder = '';
	export let required = false;

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<input use:typeAction {name} {placeholder} {required} class={INPUT_CLASSES} />
