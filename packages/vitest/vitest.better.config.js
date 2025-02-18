import { defineConfig } from "vitest/config"

export default defineConfig({
    include: [
        "**/vitest/tests/**/*.js"
    ],
    cacheDirectory: "./.cache",
    pool: "vmThreads",
    useAtomics: true,
    maxThreads: 1
});