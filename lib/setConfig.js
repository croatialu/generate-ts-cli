const inquirer = require("inquirer");
const fs = require("fs");

const promptConfig = [
  {
    name: "isSet",
    message: "是否将此配置写入config文件",
    type: "confirm",
    default: false,
  },
];

async function setConfig(config) {
  console.log(config);
  const promptValue = await inquirer.prompt(promptConfig);
  if (promptValue.isSet) {
    fs.writeFileSync("generateTs.config.json", JSON.stringify(config, null, 2));
  }
}

module.exports = setConfig;