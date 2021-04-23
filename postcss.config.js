// 配置比例
const { sep } = require("path");
module.exports = ({ file }) => {
  const rootValue =
    file.dirname.indexOf(`node_modules${sep}vant`) !== -1 ? 37.5 : 75;

  return {
    plugins: {
      autoprefixer: {},
      "postcss-pxtorem": {
        rootValue,
        propList: ["*"],
      },
    },
  };
};
