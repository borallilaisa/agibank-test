const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Base URL for all tests
    baseUrl: 'https://blog.agibank.com.br',
    
    // Viewport settings
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Timeout settings
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    
    // Retry settings for flaky tests
    retries: {
      runMode: 2,
      openMode: 1
    },
    
    // Screenshot and video settings
    screenshotOnRunFailure: true,
    video: true,
    videoCompression: 32,
    
    // Performance settings
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    
    // Environment variables
    env: {
      // Add any environment-specific variables here
      testEmail: 'teste@teste.com',
      maxLoadTime: 5000
    },
    
    // Test isolation
    testIsolation: true,
    
    // Better error messages
    experimentalRunAllSpecs: true,
    
    // Support file
    supportFile: 'cypress/support/e2e.js'
  },
})
