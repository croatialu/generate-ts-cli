#!/usr/bin/env node
const { program } = require("commander");
const {
  initConfigJson,
  compile,
  getConfigFileContent,
  constant,
} = require("../src");
program.version("0.0.1");

const { compileTargetFileType } = constant;

const staticConfig = getConfigFileContent();

function parseTargetType(value) {
  if (Object.values(compileTargetFileType).includes(value)) {
    return value;
  }
  return compileTargetFileType.TS;
}

program.option(
  "-t, --targetType <targetType>",
  "编译的目标类型",
  parseTargetType
);

program
  .command("init")
  .description("初始化config文件")
  .action(async () => {
    await initConfigJson(staticConfig);
  });

program
  .command("compile")
  .description("json => ts")
  .action(async (source) => {
    const { targetType } = source.parent;
    await compile(staticConfig, { targetType });
  });
program.parse(process.argv);
