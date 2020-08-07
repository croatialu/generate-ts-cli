const generateTs = require("../../lib/generateTs");
const getConfig = require("./../../lib/getConfig");
const setConfig = require("./../../lib/setConfig");

async function init(staticConfig) {
  const config = await getConfig(staticConfig);

  await setConfig(config);

  await generateTs(config);
}

module.exports = init;
