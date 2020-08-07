#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { program } = require("commander");

const initCommander = require("./../scripts/commander/init");

program.version("0.0.1");

let staticConfig = {};

// 配置文件如果存在则读取
if (fs.existsSync(path.resolve("generateTs.config.json"))) {
  staticConfig = require(path.resolve("generateTs.config.json"));
}

program
  .command("init")
  .description("generator a ts file")
  .action(function () {
    initCommander(staticConfig);
  });

program.parse(process.argv);
