const shell = require("shelljs");

const getSwaggerContent = require("./getSwaggerContent");
const writeSwaggerJSon = require("./writeSwaggerJson");

async function generateTs(config) {
  const {
    swaggerUrl,
    baseUrl,
    template,
    outputTsUrl,
    outputTsFileName,
  } = config;
  const swagger = await getSwaggerContent(swaggerUrl);
  await writeSwaggerJSon(swagger);

  shell.exec(
    `"node_modules/.bin/nswag" swagger2tsclient /input:./source/swagger.json /output:${outputTsUrl}/${outputTsFileName}.ts /template:"${template}" /serviceHost:"${baseUrl}" `
  );
}

module.exports = generateTs;
