const path = require("path");

module.exports = {
  baseUrl: "/wec-smmp-bd",
  pathYaml: "http://172.16.7.110/swagger-resources/platform/wec-smmp/yaml/wec-smmp-bd.yaml",
  pathApi: path.resolve(__dirname, "../api/api.js"),
  pathService: path.resolve(__dirname, "../api/service.js")
};
