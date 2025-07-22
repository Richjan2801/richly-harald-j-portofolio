import {defineConfig} from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/

export default defineConfig (
    {
        base: "/richly-harald-j-portofolio",
        plugins: [tailwindcss()],
    }
);
