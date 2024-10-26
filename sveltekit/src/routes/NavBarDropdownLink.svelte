<script lang="ts">
	import { NAVBAR_LINK_CLASSES, PARAGRAPH_SIZE_CLASSES } from '$lib/classes';
	import { cn } from '../lib/utils';

	export let href = '';
	export let text = '';
</script>

<li>
	<a {href} class={cn(NAVBAR_LINK_CLASSES, PARAGRAPH_SIZE_CLASSES['small'])}>{text}</a>
</li>
