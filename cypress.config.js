const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    waitForAnimations: true,
    baseUrl: "http://localhost:3000"
  },
})
