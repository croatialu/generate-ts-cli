const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { configPath } = require("./../constant");

const promptConfig = [
  {
    name: "isSet",
    message: "是否将此配置写入config文件",
    type: "confirm",
    default: false,
  },
];

function saveConfig(config) {
  fs.writeFileSync(path.join(configPath), JSON.stringify(config, null, 2));
}

async function setConfig(config, options = {}) {
  const { forceSet } = options;
  console.log(config);

  if (forceSet) {
    saveConfig(config);
  } else {
    const promptValue = await inquirer.prompt(promptConfig);
    if (promptValue.isSet) {
      saveConfig(config);
    }
  }
}

module.exports = setConfig;
