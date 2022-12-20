/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { alias, configPaths } = require('react-app-rewire-alias');

const aliasMap = configPaths('./tsconfig.paths.json');

module.exports = function override(config) {

  alias(aliasMap)(config);

  return config;
};
