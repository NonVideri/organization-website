<script lang="ts">
	export let name = '';
	export let placeholder = '';
	export let required = false;
</script>

<textarea
	{name}
	{placeholder}
	{required}
	class="px-6 py-4 text-lg border-none rounded-md outline-none focus:shadow-focus" />
