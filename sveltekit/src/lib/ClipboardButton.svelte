<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCopy } from '@fortawesome/free-regular-svg-icons';
	import { faCheck } from '@fortawesome/free-solid-svg-icons';
	import { clipboard } from '@skeletonlabs/skeleton';
	import { cn } from './utils';
	import { fade } from 'svelte/transition';
	export let isDark = false;
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
		isDark
			? copied
				? 'border-secondary-300/50'
				: 'hover:bg-secondary-300/30 border-secondary-300'
			: copied
			? 'border-primary-800/50'
			: 'hover:bg-primary-800/30 border-primary-800'
	)}
	data-clipboard="clipboardButton"
	use:clipboard={copy}
	on:click={onClickHandler}
	disabled={copied}
	><slot /><span class="relative">
		<Fa
			class={cn('inline ml-2', isDark ? 'text-secondary-300' : 'text-primary-800')}
			icon={copied ? faCheck : faCopy} />
		{#if copied}
			<span
				out:fade
				class={cn(
					'absolute px-1 rounded-lg bottom-6',
					isDark ? 'bg-secondary-400 text-white' : 'bg-primary-800 text-black'
				)}>
				Copied!
			</span>
		{/if}
	</span>
</button>
