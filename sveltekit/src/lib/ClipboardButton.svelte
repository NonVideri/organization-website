<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCopy } from '@fortawesome/free-regular-svg-icons';
	import { faCheck } from '@fortawesome/free-solid-svg-icons';
	import { cn } from './utils';
	import { fade } from 'svelte/transition';
	interface Props {
		isLight?: boolean;
		copy: string;
		children?: import('svelte').Snippet;
	}

	let { isLight = false, copy, children }: Props = $props();
	let copied = $state(false);

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
				? 'border-primary-300/50'
				: 'hover:bg-primary-300/20 border-primary-300'
			: copied
			? 'border-primary-400/50'
			: 'hover:bg-primary-400/20 border-primary-400'
	)}
	data-clipboard="clipboardButton"
	use:clipboard={copy}
	onclick={onClickHandler}
	disabled={copied}
	>{@render children?.()}<span class="relative">
		<Fa
			class={cn('inline ml-2', isLight ? 'text-primary-300' : 'text-primary-400')}
			icon={copied ? faCheck : faCopy} />
		{#if copied}
			<span
				out:fade
				class={cn(
					'absolute px-1 rounded-lg bottom-6',
					isLight ? 'bg-primary-400 text-white' : 'bg-primary-500 text-black'
				)}>
				Copied!
			</span>
		{/if}
	</span>
</button>
