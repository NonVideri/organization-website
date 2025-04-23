<script lang="ts">
	import { NAVBAR_LINK_CLASSES, PARAGRAPH_SIZE_CLASSES } from '$lib/classes';
	import { cn } from '../lib/utils';

	interface Props {
		href?: string;
		text?: string;
	}

	let { href = '', text = '' }: Props = $props();
</script>

<li>
	<a {href} class={cn(NAVBAR_LINK_CLASSES, PARAGRAPH_SIZE_CLASSES['small'])}>{text}</a>
</li>
