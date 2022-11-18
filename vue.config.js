const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        // Available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options.
        languages: [],
        features: ["!codelens", "!colorPicker"],
      }),
    ],
  },
});
