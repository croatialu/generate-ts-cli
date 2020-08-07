const generateTs = require("./utils/generateTs");
const initConfigJson = require("./initConfigJson");

const compile = async (staticConfig) => {
  const isFull =
    Object.values(staticConfig).every(Boolean) &&
    Object.keys(staticConfig).length > 0;
  let config = staticConfig;
  if (!isFull) {
    config = await initConfigJson(config);
  }
  await generateTs(config);
};

module.exports = compile;
