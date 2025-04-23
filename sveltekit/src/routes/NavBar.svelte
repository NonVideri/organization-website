<script lang="ts">
	import { onMount } from 'svelte';
	import NavBarLink from './NavBarLink.svelte';
	import NavBarDropdown from './NavBarDropdown.svelte';
	import NavBarDropdownLink from './NavBarDropdownLink.svelte';
	import { PROJECTS, Routes } from '$lib/constants';

	let lastScroll = 0;
	let showMenu = $state(true);

	onMount(() => {
		window.addEventListener('scroll', () => {
			const currentScroll = window.scrollY;
			if (currentScroll <= 0) {
				showMenu = true;
			} else if (currentScroll > lastScroll) {
				showMenu = false;
			} else {
				showMenu = true;
			}
			lastScroll = currentScroll;
		});
	});
</script>

<nav
	class="z-10 fixed top-0 left-0 right-0 bg-primary-800 shadow-2xl flex justify-around transition-transform duration-200 ease-in-out {!showMenu &&
		'transform -translate-y-full'}">
	<NavBarLink href={Routes.HOME} text="About us">
		<NavBarDropdown>
			<!-- <NavBarDropdownLink href={Routes.FRAMEWORK} text="Practical Freedom Framework" /> -->
			<NavBarDropdownLink href={Routes.TEAM} text="Our team" />
			<NavBarDropdownLink href={Routes.STATUTE} text="Statute" />
			<NavBarDropdownLink href={Routes.CONTACT} text="Contact us" />
		</NavBarDropdown>
	</NavBarLink>
	<NavBarLink href={Routes.PROJECTS} text="Our projects">
		<NavBarDropdown>
			{#each PROJECTS as { href, text }}
				<NavBarDropdownLink {href} {text} />
			{/each}
		</NavBarDropdown>
	</NavBarLink>
	<NavBarLink href={Routes.JOIN} text="Join us" />
	<NavBarLink href={Routes.DONATE} text="Support us" />
</nav>
