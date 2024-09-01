const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  viewportHeight:550,
  viewportWidth:1000,
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
