// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        "nuxt-icon",
        "nuxt-lodash",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/supabase",
    ],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            "defineStore", // import { defineStore } from 'pinia'
            ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    supabase: {
        redirect: false,
    },
    runtimeConfig: {
        public: {
            stripePk: process.env.STRIPE_PK_KEY,
        },
    },
    app: {
        head: {
            script: [{ src: "https://js.stripe.com/v3/", defer: true }],
        },
    },
});
