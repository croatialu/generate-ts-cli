const generateTs = require("./utils/generateTs");
const initConfigJson = require("./initConfigJson");
const { compileTargetFileType } = require("./constant");

const compile = async (staticConfig, options = {}) => {
  const { targetType = compileTargetFileType.TS } = options;

  const isFull =
    Object.values(staticConfig).every(Boolean) &&
    Object.keys(staticConfig).length > 0;
  let config = staticConfig;
  if (!isFull) {
    config = await initConfigJson(config);
  }
  await generateTs(config, { targetType });
};

module.exports = compile;
