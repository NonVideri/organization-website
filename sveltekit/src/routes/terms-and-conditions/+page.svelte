<script lang="ts">
	import Announcement from '../../lib/Announcement.svelte';
	import Paragraph from '../../lib/Paragraph.svelte';
	import SvelteSeo from "svelte-seo";
	import { BASE_URL, Routes } from '$lib/constants';

  const TITLE = "Terms & Conditions - Thriving Individuals Foundation";
  const DESCRIPTION = "Read the terms and conditions of the Thriving Individuals Foundation.";
  const URL = `${BASE_URL}${Routes.TERMS_AND_CONDITIONS}`;
</script>

<SvelteSeo
  title={TITLE}
  description={DESCRIPTION}
  canonical={URL}
  openGraph={{
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
  }}
/>

<Announcement title="Terms & Conditions">
	<Paragraph
		>I agree to receive information electronically. The processing of my personal data will be
		carried out by the Thriving Individuals Foundation (data controller) in the course of
		maintaining regular contact with the organization in connection with its statutory activities,
		in particular by sending free materials and informing about Thriving Individuals' actions and
		opportunities to support the organization's activities.</Paragraph>
	<Paragraph
		>I consent to the processing of my personal data by the Thriving Individuals Foundation (data
		controller) for marketing purposes and to send commercial information by electronic means.</Paragraph>
</Announcement>
