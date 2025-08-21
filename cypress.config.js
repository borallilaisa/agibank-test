const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://blog.agibank.com.br',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    retries: {
      runMode: 2,
      openMode: 1
    },
    screenshotOnRunFailure: true,
    video: true,
    videoCompression: 32,
    
    // Performance
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    
    // Environment variables
    env: {
      testEmail: 'teste@teste.com',
      maxLoadTime: 5000
    },
    experimentalRunAllSpecs: true,
    supportFile: 'cypress/support/e2e.js'
  },
})
