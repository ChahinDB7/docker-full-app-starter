import svgLoader from "vite-svg-loader";
import dynamicImport from "vite-plugin-dynamic-import";
import path from "path";
import locales from "./lib/locales";

export default {
  devtools: {
    enabled: true,
  },

  target: "server",

  ssr: true,

  app: {
    baseURL: "/",
    head: {
      meta: [
        { name: "theme-color", content: "#ffffff" },
        {
          name: "viewport",
          content:
            "width=device-width, height=device-height, maximum-scale=1.0",
        },
      ],
      link: [],
    },
  },

  runtimeConfig: {
    public: {
      apiUrl: "",
      strapiUrl: "",
    },
  },

  css: ["~/assets/scss/main.scss"],

  i18n: {
    globalInjection: true,
    defaultLocale: locales.find((l) => l.default).code,
    locales: locales,
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: "i18n_lang",
      redirectOn: "root",
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/colors.scss"; @import "@/assets/scss/devices.scss";',
        },
      },
    },
    resolve: {
      alias: {
        "@": path.join(__dirname, ""),
        "@assets": path.join(__dirname, "assets"),
        "@img": path.join(__dirname, "assets/img"),
        "@icons": path.join(__dirname, "assets/icons"),
        "@lib": path.join(__dirname, "lib"),
      },
    },

    plugins: [svgLoader(), dynamicImport()],
  },

  imports: {
    dirs: ["stores"],
  },

  plugins: [],

  buildModules: [],

  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "nuxt-lodash",
    "@nuxtjs/strapi",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
      },
    ],
  ],

  content: {},

  strapi: {
    url: process.env.NUXT_PUBLIC_STRAPI_URL,
    prefix: "/api",
    version: "v4",
    cookie: {
      sameSite: "lax",
    },
  },

  lodash: {
    prefix: "_",
    prefixSkip: ["string"],
    upperAfterPrefix: false,
  },

  components: [
    {
      path: "~/components/",
      pathPrefix: false,
    },
  ],
};
