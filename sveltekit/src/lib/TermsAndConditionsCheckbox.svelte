<script>
	import { Routes } from "$lib/constants";

	import Link from "$lib/Link.svelte";
	import Paragraph from "$lib/Paragraph.svelte";

</script>

<div class="checkbox-container">
  <Paragraph class="my-0 py-0">
    <label class="flex items-center">
      <input type="checkbox" name="accepted" class="w-5 h-5 mr-4" />
      Accept&nbsp;<Link href={Routes.TERMS_AND_CONDITIONS}>Terms & Conditions</Link>
    </label>
  </Paragraph>
</div>