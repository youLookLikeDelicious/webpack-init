# webpack的初始化配置
```
    npm init 

    npm i babel-cli @babel/core babel-loader @babel/preset-env clean-webpack-plugin html-webpack-plugin uglifyjs-webpack-plugin webpack webpack-cli webpack-dev-server webpack-merge style-loader css-loader sass-loader node-sass file-loader --save-dev
    
    ...
    package.json 下的相关配置
    "scripts": {
        "dev": "webpack-dev-server --config ./config/webpack.dev.js",
        "build": "webpack --config ./config/webpack.prod.js"
      }
    ...

    # 开发模式
    npm run dev

    # 打包js
    npm run build

    # 发布npm
    npm log
    ...
    可以在package.json中的files属性中添加只想发布的文件
    ...
    npm publish
```
