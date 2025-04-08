const { execSync } = require("child_process");
const timestamp = Date.now(); // Or use another method to generate a timestamp
process.env.BUILD_TIMESTAMP = timestamp;
execSync("vue-cli-service build", { stdio: "inherit" });
