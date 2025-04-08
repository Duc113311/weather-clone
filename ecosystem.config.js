module.exports = {
  apps: [
    {
      name: "weather-test",
      script: "npx",
      interpreter: "none",
      args: "serve -s dist",
      env: {
        NODE_ENV: "development",
        // PORT: 3000,
      },
    },
  ],
};
