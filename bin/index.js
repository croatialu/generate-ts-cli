#!/usr/bin/env node
const { program } = require("commander");
const { initConfigJson, compile, getConfigFileContent } = require("../src");
program.version("0.0.1");

const staticConfig = getConfigFileContent();

program
  .command("init")
  .description("初始化config文件")
  .action(async () => {
    await initConfigJson(staticConfig);
  });
program
  .command("compile")
  .description("json => ts")
  .action(async () => {
    await compile(staticConfig);
  });

program.parse(process.argv);
