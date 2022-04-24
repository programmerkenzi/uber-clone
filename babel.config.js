/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-02 08:02:50
 * @LastEditTime: 2021-08-05 08:23:54
 * @LastEditors: Kenzi
 */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
