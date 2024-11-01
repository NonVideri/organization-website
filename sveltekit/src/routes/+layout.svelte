<script lang="ts">
	import {
		getModalStore,
		initializeStores,
		Modal,
		type ModalComponent,
	} from '@skeletonlabs/skeleton';
	import '../app.pcss';
	import SubscribeForm from '$lib/SubscribeForm.svelte';
	import Alert from './Alert.svelte';
	import NavBar from './NavBar.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { NO_SEPARATOR_ROUTES } from '$lib/constants';

	const modalComponent: ModalComponent = { ref: SubscribeForm };

	initializeStores();

	const modalStore = getModalStore();

	onMount(() => {
		if (!localStorage.getItem('subscribed')) {
			modalStore.trigger({
				type: 'component',
				component: modalComponent,
			});
		}
	});
</script>

<NavBar />
<Alert />
<Modal />
<div
	class="flex flex-col items-center w-full mt-12 sm:mt-[50px] md:mt-[52px] lg:mt-[60px] xl:mt-20">
	{#if !NO_SEPARATOR_ROUTES.includes($page.url.pathname)}
    <div class="pt-6 md:pt-10 xl:pt-12 2xl:pt-20 w-full" />
	{/if}
	<slot />
</div>
<footer class="flex flex-col items-center w-full py-4 md:py-6 xl:py-8 text-sm bg-primary-800">
	<p>© 2023 Thriving Individuals Foundation</p>
	<p>All rights reserved.</p>
</footer>
