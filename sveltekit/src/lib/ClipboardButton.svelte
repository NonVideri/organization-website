<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCopy } from '@fortawesome/free-regular-svg-icons';
	import { faCheck } from '@fortawesome/free-solid-svg-icons';
	import { clipboard } from '@skeletonlabs/skeleton';
	import { cn } from './utils';
	import { fade } from 'svelte/transition';
	export let isLight = false;
	export let copy: string;
	let copied = false;

	function onClickHandler(): void {
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1000);
	}
</script>

<button
	class={cn(
		'py-[px] px-1 rounded-lg border-dotted border-2 leading-normal',
		isLight
			? copied
				? 'border-secondary-300/50'
				: 'hover:bg-secondary-300/20 border-secondary-300'
			: copied
			? 'border-secondary-400/50'
			: 'hover:bg-secondary-400/20 border-secondary-400'
	)}
	data-clipboard="clipboardButton"
	use:clipboard={copy}
	on:click={onClickHandler}
	disabled={copied}
	><slot /><span class="relative">
		<Fa
			class={cn('inline ml-2', isLight ? 'text-secondary-300' : 'text-secondary-400')}
			icon={copied ? faCheck : faCopy} />
		{#if copied}
			<span
				out:fade
				class={cn(
					'absolute px-1 rounded-lg bottom-6',
					isLight ? 'bg-secondary-400 text-white' : 'bg-secondary-500 text-black'
				)}>
				Copied!
			</span>
		{/if}
	</span>
</button>
