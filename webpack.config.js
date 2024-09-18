// webpack.config.js
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";
import webpack from "webpack";

// 处理 __dirname，因为它在 ES 模块中不可用
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    chunkFormat: 'module',
  },
  target: 'node',
  mode: "production",
  experiments: {
    outputModule: true,
  },
  plugins: [
    // 构建过程中就将env环境变量植入到process.env中，因为env是不会被打包进产物中的
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    })
  ]
};
