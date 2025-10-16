// Type definitions for svelte-seo v1.7.1
// This file works around broken type generation in svelte-seo for Svelte 5
// Can be removed when upgrading to a version with proper Svelte 5 types

declare module "svelte-seo" {
	import type { Component } from "svelte";
	import type { Thing, WithContext } from "schema-dts";

	export interface SvelteSeoProps {
		title?: string;
		description?: string;
		keywords?: string;
		canonical?: string;
		openGraph?: {
			title?: string;
			type?: string;
			url?: string;
			description?: string;
			site_name?: string;
			images?: Array<{
				url?: string;
				alt?: string;
				width?: number | string;
				height?: number | string;
			}>;
		};
		twitter?: {
			card?: "summary" | "summary_large_image" | "player" | "app";
			site?: string;
			creator?: string;
			title?: string;
			description?: string;
			image?: string;
		};
		jsonLd?: Thing | WithContext<Thing>;
	}

	const SvelteSeo: Component<SvelteSeoProps>;
	export default SvelteSeo;
}
