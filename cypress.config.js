const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video:true,
  screenshotOnRunFailure:true,
   screenshotsFolder:"cypress/screenshots",
   trashAssetsBeforeRuns:true,
   capture:'fullPage'
  
});
