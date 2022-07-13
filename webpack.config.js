// const path = require('path');
// const nodeExternals = require('webpack-node-externals'); // webpack의 번들링 과정에서 외부 모듈(라이브러리)를 제외시켜주는 패키지

import path from 'path';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
module.exports = {
  name: 'boilerplate-build',
  mode: 'development', // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js'],  // 확장자 미리 지정해서 포함시키도록
  },
  entry: {
    // 입력(엮여있는 파일이면 다 안적어도 됨)
    main: ['./src/bin/www'],
  },
  output: {
    // 출력
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  externalsPresets: { node : true },  // path, fs 등과 같은 내장 모듈을 무시하기 위해
  externals: [nodeExternals()], // node_modules 폴더에 있는 모든 모듈을 무시하기 위해
};
*/

export default {
  name: 'boilerplate-build',
  mode: 'development', // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js'],  // 확장자 미리 지정해서 포함시키도록
  },
  externalsPresets: { node : true },  // path, fs 등과 같은 내장 모듈을 무시하기 위해
  externals: [nodeExternals()], // node_modules 폴더에 있는 모든 모듈을 무시하기 위해
  entry: {
    // 입력(엮여있는 파일이면 다 안적어도 됨)
    main: ['./src/bin/www'],
  },
  output: {
    // 출력
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
    ]
  },
};
