const { defineConfig } = require("@vue/cli-service");
// const JavaScriptObfuscator = require("webpack-obfuscator");
const path = require("path");

const ENV = process.env.VUE_APP_ENV;
const OUTPUT_DIR =
  ENV === "staging"
    ? "dist-staging"
    : ENV === "development"
    ? "dist-dev"
    : "dist";

console.log("🚀 Build env:", ENV, "| Output:", OUTPUT_DIR);

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: OUTPUT_DIR,

  devServer: {
    proxy: {
      //API_WEATHER
      "/swtapi": {
        target: "https://swtapi.tohapp.com",
        changeOrigin: true,
        pathRewrite: { "^/swtapi": "" },
      },
      //API_IP_FIND
      "/ipfind": {
        target: "https://ipfind.co",
        changeOrigin: true,
        pathRewrite: { "^/ipfind": "" },
      },
      //API_AQI
      "/airapi": {
        target: "https://airapi.tohapp.com",
        changeOrigin: true,
        pathRewrite: { "^/airapi": "" },
      },
      //API_RADAR
      "/sradar": {
        target: "https://sradar.tohapp.com",
        changeOrigin: true,
        pathRewrite: { "^/sradar": "" },
      },
    },
  },
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    // plugins: [
    //   new JavaScriptObfuscator(
    //     {
    //       rotateStringArray: true,
    //     },
    //     ["**/excluded_file.js"]
    //   ), // specify files or patterns to exclude from obfuscation if needed
    // ],
  },
});
