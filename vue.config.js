const PRODUCT = process.env.NODE_ENV === "production";

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  // 打包文件的前缀
  publicPath: PRODUCT ? "/wec-smmp-bd" : "./",
  // 打包输出目录
  outputDir: "./dist",
  chainWebpack: config => {
    config.resolve.alias.set("@styles", resolve("src/styles"));
    config.resolve.alias.set("@views", resolve("src/views"));
    config.resolve.alias.set("@pages", resolve("src/pages"));
    config.resolve.alias.set("@mixins", resolve("src/utils/mixins"));
    config.resolve.alias.set("@components", resolve("src/components"));
    config.resolve.alias.set("@assets", resolve("src/assets"));
    config.resolve.alias.set("@utils", resolve("src/utils"));
    config.resolve.alias.set("@api", resolve("src/api"));
  },
  productionSourceMap: false,
  pages: {
    index: {
      // page 的入口
      entry: "./src/main",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "数据中心"
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        preferPathResolver: "webpack",
        paths: [path.join(__dirname, "src/styles")],
        import: ["global.styl"]
      }
    }
  },
  devServer: {
    // 本地开发代理地址
    proxy: {
      "/wec-smmp-bd": {
        // target: "http://iwecloud4:31090/", //马拉松开发环境
        target: "http://iwecloud8:31781/", // zj
        changeOrigin: true
      }
    }
  },
  // 解决架子自适应宽度
  configureWebpack: {
    externals: {
      jQuery: "jquery",
      $: "jquery"
    }
  }
};
