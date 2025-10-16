<script lang="ts">
	import { page } from "$app/stores";
	import Section from "$lib/Section.svelte";
	import Link from "$lib/Link.svelte";
</script>

<Section>
	<div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
		<h1 class="text-6xl font-bold text-primary-500 mb-4">{$page.status}</h1>
		<h2 class="text-3xl font-semibold mb-6">
			{$page.status === 404 ? "Page Not Found" : "Something went wrong"}
		</h2>
		<p class="text-lg mb-8 max-w-md text-surface-600">
			{#if $page.status === 404}
				The page you're looking for doesn't exist or has been moved.
			{:else}
				{$page.error?.message || "An unexpected error occurred."}
			{/if}
		</p>
		<div class="flex gap-4">
			<Link href="/" class="btn bg-primary-500 text-white hover:bg-primary-600">
				Go to Homepage
			</Link>
			<Link href="/support" class="btn bg-surface-200 hover:bg-surface-300">Contact Support</Link>
		</div>
	</div>
</Section>
