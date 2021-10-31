import colors from 'vuetify/es5/util/colors';
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-typescript',
    title: 'nuxt-typescript',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  ssr: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/firebase.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // `@nuxtjs/firebase`はv9以降のfirebaseに対応してない
    // [
    //   '@nuxtjs/firebase',
    //   {
    //     config: {
    //       apiKey: 'AIzaSyAIysuFnDXqa7yzGarKgRoBrQVjEP41X8Y',
    //       authDomain: 'batacook-a9a39.firebaseapp.com',
    //       projectId: 'batacook-a9a39',
    //       storageBucket: 'batacook-a9a39.appspot.com',
    //       messagingSenderId: '139842308418',
    //       appId: '1:139842308418:web:d15ef97311eac723ed20db',
    //       measurementId: 'G-JVSLPYMGLP',
    //     },
    //     services: {
    //       firestore: true,
    //     },
    //   },
    // ],
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // ランタイムlintの設定
  // https://typescript.nuxtjs.org/ja/guide/lint#%E3%83%A9%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%A0-lint
  // typescript: {
  //   typeCheck: {
  //     eslint: {
  //       files: './src/**/*.{ts,js,vue}',
  //     },
  //   },
  // },

  generate: {
    // @nuxtjs/composition-apiのオプション設定。必要なさそうなら削除。
    // https://composition-api.nuxtjs.org/getting-started/setup/
    interval: 2000,
    dir: 'public',
  },
};

export default config;
