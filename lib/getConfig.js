const inquirer = require("inquirer");

function promptValidate(value) {
  if (value.length) {
    return true;
  }
  return "请输入";
}

function createPromptConfig(config) {
  const {
    swaggerUrl,
    outputTsUrl,
    outputTsFileName,
    template,
    baseUrl,
  } = config;
  return [
    {
      type: "input",
      name: "swaggerUrl",
      message: "请输入swaggerUrl链接",
      validate: promptValidate,
      default: swaggerUrl,
    },
    {
      type: "input",
      name: "outputTsUrl",
      message: "请输入输出ts的文件路径",
      validate: promptValidate,
      default: outputTsUrl,
    },
    {
      type: "input",
      name: "outputTsFileName",
      message: "请输入输出ts文件的文件名",
      validate: promptValidate,
      default: outputTsFileName,
    },
    {
      type: "input",
      name: "baseUrl",
      message: "请输入baseUrl",
      validate: promptValidate,
      default: baseUrl,
    },
    {
      type: "list",
      name: "template",
      message: "请选择模板",
      choices: [
        "QueryCallbacks",
        "JQueryPromises",
        "AngularJS",
        "Angular",
        "Fetch",
        "Aurelia",
        "Axios",
      ],
      default: template,
    },
  ];
}

async function getConfig(staticConfig) {
  return await inquirer.prompt(createPromptConfig(staticConfig));
}

module.exports = getConfig;
