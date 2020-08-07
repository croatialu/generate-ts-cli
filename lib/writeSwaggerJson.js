const fs = require("fs");
const path = require("path");
const mkdirsSync = require("./mkdirsSync");

async function writeSwaggerJson(swagger) {
  mkdirsSync("./source");
  return new Promise((resolve, reject) => {
    fs.writeFile(
      path.resolve("./source/swagger.json"),
      JSON.stringify(swagger, null, 2),
      (err) => {
        if (err) return reject(err);
        resolve();
      }
    );
  });
}

module.exports = writeSwaggerJson;
