const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "reports",
    reportFileName: "report",
    json: true,
    html: true,
  },
  env: {
    grepFilterSpecs: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
  },
});
