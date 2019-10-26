const { override, fixBabelImports, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin(["styled-components", {displayName: true}]),

  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);