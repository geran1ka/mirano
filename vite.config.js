import { defineConfig } from "vite";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: "import jsx from '@/jsx.js'",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
              },
              cleanupIDs: {
                minify: false,
                remove: false,
              },
              convertPathData: false,
            },
          },
          "sortAttrs",
          {
            name: "addAttributesToSVGElement",
            params: {
              attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
            },
          },
        ],
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 90,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 90,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 90,
      },
      tiff: {
        // https://sharp.pixelplumbing.com/api-output#tiff
        quality: 100,
      },
      // gif does not support lossless compression
      // https://sharp.pixelplumbing.com/api-output#gif
      gif: {},
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true,
        quality: 90,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true,
        quality: 80,
      },
      cache: false,
      cacheLocation: undefined,
    }),
  ],
});
