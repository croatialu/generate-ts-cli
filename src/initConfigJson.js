const getConfig = require("./utils/getConfig");
const setConfig = require("./utils/setConfig");

const initConfigJson = async (staticConfig = {}, options = {}) => {
  const { saveConfig = true } = options;
  const config = await getConfig(staticConfig);

  if (saveConfig) {
    await setConfig(config, { forceSet: true });
  }

  return config;
};

module.exports = initConfigJson;
