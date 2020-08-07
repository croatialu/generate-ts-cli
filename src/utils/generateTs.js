const shell = require("shelljs");

const getSwaggerContent = require("./getSwaggerContent");
const writeSwaggerJSon = require("./writeSwaggerJson");
const { swaggerFilePath } = require("./../constant");

async function generateTs(config = {}) {
  const {
    swaggerUrl = "",
    baseUrl = "",
    template = "",
    outputTsUrl = "",
    outputTsFileName = "",
  } = config;
  const swagger = await getSwaggerContent(swaggerUrl);
  await writeSwaggerJSon(swagger);

  shell.exec(
    `nswag swagger2tsclient /input:${swaggerFilePath} /output:${outputTsUrl}/${outputTsFileName}.ts /template:"${template}" /serviceHost:"${baseUrl}" `
  );
}

module.exports = generateTs;
