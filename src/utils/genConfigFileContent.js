const { configPath } = require("./../constant");
const fs = require("fs");

const getConfigFileContent = () => {
  // 配置文件如果存在则读取
  if (fs.existsSync(configPath)) {
    return require(configPath);
  }

  return {
    swaggerUrl: "",
    outputTsUrl: "",
    outputTsFileName: "",
    baseUrl: "",
    template: "",
  };
};

module.exports = getConfigFileContent;
