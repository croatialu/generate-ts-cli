const path = require("path");
const rootPath = process.cwd();
const configPath = path.join(rootPath, "./generateTs.config.json");
const sourceDirPath = path.join(__dirname, "../source");
const swaggerFilePath = path.join(sourceDirPath, "./swagger.json");

module.exports = {
  rootPath,
  configPath,
  sourceDirPath,
  swaggerFilePath,
};
