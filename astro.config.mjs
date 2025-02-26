// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import yeskunallumami from "@yeskunall/astro-umami";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
    redirects: {
        "/alexdumo": "/about/alexdumo",
    },
    integrations: [
        react(),
        tailwind({ applyBaseStyles: false }),
        starlight({
            plugins: [starlightImageZoom()],
            title: "HeyTCM",
            logo: {
                light: "./public/HeyTCM-black.svg",
                dark: "./public/HeyTCM-white.svg",
                replacesTitle: true,
            },
            social: {
                discord: "https://discord.gg/eTsQ98uZzq",
                github: "https://github.com/HeyTCM/HeyTCM",
                patreon: "https://www.patreon.com/c/HeyTCM",
                youtube: "https://www.youtube.com/@HeyTCMApp",
            },
            editLink: {
                baseUrl: "https://github.com/HeyTCM/website/tree/main/",
            },
            disable404Route: true,
            favicon: "./public/favicon.png",
            customCss: [
                "@fontsource/dm-sans/400.css",
                "@fontsource/dm-sans/600.css",
                "@fontsource/dm-mono/400.css",
                "./src/styles/starlight.css",
            ],
            sidebar: [
                {
                    label: "Guides",
                    autogenerate: { directory: "guides" },
                },
                {
                    label: "About",
                    autogenerate: { directory: "about" },
                },
                {
                    label: "Developers",
                    autogenerate: { directory: "developers" },
                },
            ],
        }),
        mdx(),
        sitemap(),
        yeskunallumami({
            id: "09a72d11-c8dd-43b0-9ee8-e2c7c492bc21",
            endpointUrl: "https://umami.cool.korhq.com",
        }),
    ],
    site: "https://HeyTCM.com",
    devToolbar: {
        enabled: false,
    },
});
