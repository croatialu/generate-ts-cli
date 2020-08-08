const shell = require("shelljs");

const getSwaggerContent = require("./getSwaggerContent");
const writeSwaggerJSon = require("./writeSwaggerJson");
const { swaggerFilePath } = require("./../constant");
const { compileTargetFileType } = require("./../constant");

async function generateTs(config = {}, options = {}) {
  const {
    swaggerUrl = "",
    baseUrl = "",
    template = "",
    outputTsUrl = "",
    outputTsFileName = "",
  } = config;
  const { targetType = compileTargetFileType.TS } = options;
  const swagger = await getSwaggerContent(swaggerUrl);
  await writeSwaggerJSon(swagger);

  const outputTsFilePath = `${outputTsUrl}/${outputTsFileName}.ts`;

  shell.exec(
    `nswag swagger2tsclient /input:${swaggerFilePath} /output:${outputTsFilePath} /template:"${template}" /serviceHost:"${baseUrl}" `
  );

  if (targetType === compileTargetFileType.JS) {
    shell.exec(`tsc ${outputTsFilePath} --allowJs --lib ES2015`);
    shell.exec(`rm -rf ${outputTsFilePath}`);
  }
}

module.exports = generateTs;
