<script lang="ts">
  import type { SubmitFunction } from '@sveltejs/kit';
	import { enhance } from '$app/forms';

	import { setAlert } from '$lib/alert.store';
	import { FORM_CLASSES } from '$lib/classes';
	import { Routes } from '$lib/constants';
	import Header from '$lib/Header.svelte';
	import Input from '$lib/Input.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import SubmitButton from '$lib/SubmitButton.svelte';
	import { cn } from '$lib/utils';
	import TermsAndConditionsCheckbox from '$lib/TermsAndConditionsCheckbox.svelte';

  interface Props {
    onClose: () => void;
  }

  let { onClose }: Props = $props();

	const handleSubmit: SubmitFunction = ({ formData, cancel }) => {
		if (!formData.get('accepted')) {
			setAlert('Please accept the terms & conditions', 'warning');
			cancel();
			return;
		}

		return ({ result, update }) => {
			if (result.type === 'success') {
				localStorage.setItem('subscribed', 'true');
				onClose();
				setAlert('Almost there! Please check your email to confirm the subscription.', 'success');
				return update();
			}

			if (result.type === 'failure') {
				setAlert(
					`An error occurred${
						result.data ? `: ${result.data.message}` : '.'
					} Please try again later.`
				);
				cancel();
			}
		};
	};

	const handleClose = () => {
		localStorage.setItem('subscribed', 'true');
		onClose();
	};
</script>

<form
	class={cn(FORM_CLASSES, 'absolute pt-8 pb-10 px-32 max-w-2xl rounded-xl bg-primary-600')}
	method="POST"
	action={Routes.SUBSCRIBE}
	use:enhance={handleSubmit}>
	<button
		type="button"
		class="absolute top-2 right-5 text-3xl cursor-pointer"
		onclick={handleClose}>
		×
	</button>
	<Header type="h4" class="self-center">Join our elite mailing list</Header>
	<Input type="text" name="name" placeholder="Name *" required />
	<Input type="email" name="email" placeholder="Email *" required />
  <TermsAndConditionsCheckbox />

	<SubmitButton>Subscribe</SubmitButton>
	<Paragraph type="small">
		We only send occasional emails with the most important updates. We will never spam you.
	</Paragraph>
</form>
