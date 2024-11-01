<script lang="ts">
	import { qrcode } from 'svelte-qrcode-action';

	import Header from '../../lib/Header.svelte';
	import Paragraph from '../../lib/Paragraph.svelte';
	import { SECTION_CLASSES } from '$lib/classes';
	import { cn } from '../../lib/utils';
	import ClipboardButton from '../../lib/ClipboardButton.svelte';

	export let name: string;
	export let address: string;
	export let logo: string;
</script>

<div class={cn(SECTION_CLASSES, 'my-8')}>
	<Header type="h4">{name}</Header>
	<Paragraph><ClipboardButton copy={address}>{address}</ClipboardButton></Paragraph>
	<div use:qrcode={{ data: address, image: logo }} />
</div>
