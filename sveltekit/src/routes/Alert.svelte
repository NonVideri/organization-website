<script lang="ts">
	import { onMount } from 'svelte';
	import Paragraph from '../lib/Paragraph.svelte';
	import { alert } from '../lib/alert.store';
	import { cn } from '../lib/utils';

	let dialog: HTMLDialogElement;

	alert.subscribe((value) => {
		if (value && dialog) {
			dialog.show();
		}
		if (!value && dialog) {
			dialog.close();
		}
	});

	const ALERT_STYLES = {
		error: 'bg-error-500',
		success: 'bg-success-500',
		info: 'bg-secondary-500',
		warning: 'bg-warning-500',
	};

	function closeDialog() {
		alert.set(null);
	}

	onMount(() => {
		const handleKeydown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeDialog();
			}
		};

		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<dialog
	class={cn(
		'fixed bottom-[7vh] left-[5vw] z-10 m-0 px-8 py-2 rounded-md cursor-pointer text-white',
		ALERT_STYLES[$alert?.type ?? 'error']
	)}
	bind:this={dialog}
	aria-labelledby="dialog-title"
	aria-modal="true">
	<button on:click={closeDialog} aria-label="Close alert">
		<Paragraph id="dialog-title" type="small">
			{$alert?.message}
		</Paragraph>
	</button>
</dialog>
