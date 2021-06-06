module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    '@nuxtjs/vuetify',
  ],
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ]
}
