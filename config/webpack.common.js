const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
dotenv.config();
const { join } = require("path");
// 웹팩에서 실행해서 나오는 결과물을 확인하기 위해서는 html 파일을 수동으로 작성해야 함. babel-loader에서 chunkhash를 사용하면 파일의 내용이 수정될 때마다 파일 이름이 변경되도록 할 수 있음. 이런 옵션 때문에 파일의 내용이 변경될 때마다 html 파일의 내용도 수정해야 함. 이러한 작업을 자동으로 하는 플러그인이 html-webpack-plugin임.(html 파일에 javascript 번들을 자동으로 묶어 줌)
const path = require("path");
//node.js이 기본으로 제공하는 모듈 파일/폴더/디렉터리 등의 경로를 편리하게 설정할 수 있는 기능을 제공
const webpack = require("webpack");
//웹팩은 기본적으로 여러 개의 자바스크립트 모듈을 하나의 파일로 묶어내는 번들러

//웹팩은 다른 모듈을 사용하고 있는 최상위 자바스크립트 파일이 어디에 있는지 알아야 하며, 설정 파일에서 이를 Entry 속성으로 명시
module.exports = {
  entry: `${path.resolve(__dirname, "../src")}/index.tsx`,
  module: {
    rules: [
      // 규칙
      {
        //test 항목에 정의된 정규식에 매칭되는 파일은 use 항목에 등록된 로더를 통해서 처리됨
        test: /\.(ts|tsx|js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8192,
              name: "/img/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  //설정 파일에 설치한 플러그인을 임포트한 후에, plugins 속성에 임포트한 플러그인을 추가
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      env: process.env,
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  resolve: {
    //object import나 require로 간단히 특정 모듈의 별칭을 만들 수 있음
    alias: {
      "@": path.resolve(__dirname, "../src/"),
    },
    //확장자를 순서대로 해석함. 여러파일에서 이름이 동일하지만 다른 확장자를 가진 경우 webpack은 배열의 앞에서부터 파일을 해석하고 남은 것은 해석하지 않음
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
};
