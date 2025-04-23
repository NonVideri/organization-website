<script lang="ts">
	import {
    Modal,
	} from '@skeletonlabs/skeleton-svelte';
	import '../app.css';
	import SubscribeForm from '$lib/SubscribeForm.svelte';
	import Alert from './Alert.svelte';
	import NavBar from './NavBar.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { NO_SEPARATOR_ROUTES } from '$lib/constants';

  interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

  let isModalOpen = $state(false);

  function closeModal() {
    isModalOpen = false;
  }

	onMount(() => {
		if (!localStorage.getItem('subscribed')) {
			isModalOpen = true;
		}
	});
</script>

<NavBar />
<Alert />
<Modal open={isModalOpen}>
  {#snippet content()}
    <SubscribeForm onClose={closeModal} />
  {/snippet}
</Modal>
<div
	class="flex flex-col items-center w-full mt-12 sm:mt-[50px] md:mt-[52px] lg:mt-[60px] xl:mt-20">
	{#if !NO_SEPARATOR_ROUTES.includes(page.url.pathname)}
    <div class="pt-6 md:pt-10 xl:pt-12 2xl:pt-20 w-full"></div>
	{/if}
	{@render children?.()}
</div>
<footer class="flex flex-col items-center w-full py-4 md:py-6 xl:py-8 text-sm bg-surface-800">
	<p>© 2023 Thriving Individuals Foundation</p>
	<p>All rights reserved.</p>
</footer>
