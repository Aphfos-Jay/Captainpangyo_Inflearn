const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      //Rules 밑에 들어가는 하나의 오브젝트{}단위가 각각의 Rule을 의미
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        // loader의 실행 순서는 오른쪽에서 왼쪽으로 즉 css-loader가 먼저 실행이 된 후 style-loader가 실행이 됨

        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  // plugins에 항목을 추가할 땐 new를 이용한 객체 인스터스를 추가한다고 생각하면 됨
  // Plugin은 결과물에 대한 정보를 변환시킴 (플러그인 사용시 main.css 파일이 생성됨)
};
