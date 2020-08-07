#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { program } = require("commander");

const { initConfigJson, compile, getConfigFileContent } = require("../src");

program.version("0.0.1");

let staticConfig = getConfigFileContent();

program
  .command("init")
  .description("初始化config文件")
  .action(async () => {
    await initConfigJson();
  });
program
  .command("compile")
  .description("json => ts")
  .action(async () => {
    await compile(staticConfig);
  });
program.parse(process.argv);
