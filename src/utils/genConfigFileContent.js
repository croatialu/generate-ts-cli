const { configPath } = require("./../constant");
const fs = require("fs");

const getConfigFileContent = () => {
  // 配置文件如果存在则读取
  if (fs.existsSync(configPath)) {
    return require(configPath);
  }

  return {
    swaggerUrl: "http://127.0.0.1:5501/swagger.json",
    outputTsUrl: "template",
    outputTsFileName: "demo",
    baseUrl: "www.google.com",
    template: "Axios",
  };
};

module.exports = getConfigFileContent;
