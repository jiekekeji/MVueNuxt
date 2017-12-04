004-使用Scss预处理器和全局的样式文件：
===

一、使用Scss预处理器
---

1、安装依赖:
```
npm install --save-dev node-sass sass-loader
```

2、使用lang="scss"标识,例如：
```
<style scoped="" lang="scss">
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .title {
      font-size: 18px;
      color: red;
    }
  }
</style>
```

二、引用全局的样式文件：
---
1、在assets/style下有文件base.scss和reset.css：

2、在nuxt.config.js文件中加入样式资源:
```
  css: [
    '@/assets/style/base.scss',
    '@/assets/style/reset.css',
  ],
```
