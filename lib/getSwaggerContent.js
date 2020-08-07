const http = require("http");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

require("https").globalAgent.options.ca = require("ssl-root-cas/latest").create();

const getSwaggerContent = async (swaggerUrl) => {
  if (swaggerUrl.startsWith("http")) {
    // 外链
    return new Promise((resolve, reject) => {
      axios(swaggerUrl)
        .then((res) => res.data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(swaggerUrl), "utf8", (err, data) => {
      if (!err) {
        resolve(JSON.parse(data));
      }
      reject(new Error("swagger 资源路径错误"));
    });
  });
};

module.exports = getSwaggerContent;
