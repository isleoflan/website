// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
// @ts-check
import { minifyHtml } from 'vite-plugin-html';
import { viteSingleFile } from "vite-plugin-singlefile"


export default /** @type {import('astro').AstroUserConfig} */ ({
  // Comment out "renderers: []" to enable Astro's default component support.

  renderers: [
    "@astrojs/renderer-vue"
  ],
  buildOptions: {
    site: "https://isleoflan.ch",
    pageUrlFormat: "directory",
    sitemap: true,
  },
  markdownOptions: {
    // parser: ["@astrojs/markdown-remark"],
  },
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
        "@content": "/src/content",
        "@layouts": "/src/layouts",
        "@pages": "/src/pages",
        "@styles": "/src/styles",
      },
    },
    plugins: [
      viteSingleFile(),
      minifyHtml(),
    ],
  },
});
