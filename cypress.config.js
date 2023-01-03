const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://next.privat24.ua/",
    excludeSpecPattern:
      ("**/1-getting-started/*.js", "**/2-advanced-examples/*.js"),
  },
});
module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    if (browser.name === "chrome") {
      launchOptions.args.push("--disable-dev-shm-usage");
    }
    return launchOptions;
  });
};
