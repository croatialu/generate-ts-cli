#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { program } = require("commander");
const generateTs = require("../lib/generateTs");

const initCommander = require("./../scripts/commander/init");

program.version("0.0.1");

let staticConfig = {};

// 配置文件如果存在则读取
if (fs.existsSync(path.resolve("generateTs.config.json"))) {
  staticConfig = require(path.resolve("generateTs.config.json"));
}

program.option("-y, --yes", "跳过config配置");

program.parse(process.argv);

const promise = program.yes
  ? generateTs(staticConfig)
  : initCommander(staticConfig);

promise.then(() => {
  process.exit();
});
