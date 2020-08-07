const fs = require("fs");
const path = require("path");
const mkdirsSync = require("./mkdirsSync");
const { sourceDirPath, swaggerFilePath } = require("./../constant");
async function writeSwaggerJson(swagger) {
  mkdirsSync(sourceDirPath);

  return new Promise((resolve, reject) => {
    fs.writeFile(
      path.resolve(swaggerFilePath),
      JSON.stringify(swagger, null, 2),
      (err) => {
        if (err) return reject(err);
        resolve();
      }
    );
  });
}

module.exports = writeSwaggerJson;
