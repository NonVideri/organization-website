<script lang="ts">
	import { FORM_CLASSES } from "$lib/classes";
	import SubscribeForm from "$lib/SubscribeForm.svelte";
	import { cn } from "$lib/utils";

	interface Props {
		onClose: () => void;
	}

	let { onClose }: Props = $props();

	const handleClose = () => {
		localStorage.setItem("subscribed", "true");
		onClose();
	};
</script>

<div
	class={cn(
		FORM_CLASSES,
		"relative pt-8 pb-10 px-10 md:px-12 md:max-w-2xl rounded-xl bg-surface-800",
	)}>
	<button
		type="button"
		class="absolute top-2 right-5 text-3xl text-white cursor-pointer"
		onclick={handleClose}>
		×
	</button>
	<SubscribeForm />
</div>
