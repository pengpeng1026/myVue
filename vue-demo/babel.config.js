module.exports = {
  // 配置预设
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 配置插件
  "plugins": [
    [
      "component",//完整名称是babel-plugin-component
      {
        "libraryName": "element-ui", //使用的组件库名
        "styleLibraryName": "theme-chalk" //样式
      }
    ]
  ]
}
