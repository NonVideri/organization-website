<script lang="ts">
	interface Props {
		src: string;
		alt: string;
	}

	let { src, alt }: Props = $props();
</script>

<img class="my-2 md:my-4" {src} {alt} />
