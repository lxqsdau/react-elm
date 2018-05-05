# 前言
<!-- 时间飞逝，用React做项目快一年了，对React技术比较熟悉，看到网上很多用Vue开发饿了么移动端，针对React的项目少之又少，借此机会独立用React做个饿了么，一来当做平时练习，二来供大家学习使用。如果对大家有所帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^ -->

项目从零搭建，没采用任何脚手架。

选择mobx作为状态管理器的理由：mobx轻量级，mobx学习项目不多
# 技术点
react + react-dom + react-router-dom4 + mobx + mobx-react + webpack4 + less + axios + immutable + ES6/7 + flex + ESLint + i18

# 项目运行
```
git clone https://github.com/lxqsdau/react-elm.git
cd react-elm
npm i
npm start
```

# .babelrc
```
babel-core babel核心库
babel-loader babel和webpack协调使用的插件
babel-preset-es2015  编译ES6
babel-preset-react 编译React
```
# eslint配置文件解析
```
安装eslint
extends 指定eslint规范，eslint-config-airbnb本例使用第三方airbnb -- 安装eslint-config-airbnb
parser EsLint默认使用esprima做脚本解，这里切换成了babel-eslint -- 安装babel-eslint
env 脚本要运行在什么环境
globals 额外的全局变量
plugins 引用第三方的插件,这里用react -- 安装eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y
rules 开启规则和发生错误时报告的等级，配置好才能生效
格式是：规则名: 规则
---- 0或’off’：关闭规则。 
     1或’warn’：打开规则，并且作为一个警告（并不会导致检查不通过）。 
     2或’error’：打开规则，并且作为一个错误 (退出码为1，检查不通过)。
---
 "no-tabs": 0 airbnb使用 2 个空格作为缩进，不能使用tab，所以关闭
 "indent": ["error", "tab"] 使用tab缩进
 "indent": ["error", 4]  缩进设置为4个空格  
 "comma-dangle": ["error", "never"] 要求或禁止末尾逗号：不允许逗号
 "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }]规则是要使用.jsx后缀， jsx文件可以是.js或.jsx后缀
 "react/jsx-indent": [2, "tab"] jsx语法使用tab缩进
```

# 开始时间 2018年4月20
