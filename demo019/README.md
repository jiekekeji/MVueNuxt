005-使用element-ui插件:
===

1、初始化工程:
```
$ vue init nuxt-community/starter-template demo005
```

2、进入demo005目录(cd demo005),安装依赖：
```
$ cnpm install
```

3、安装element-ui插件:
```
$ cnpm i element-ui -S
```

4、在plugins目录下新建element-ui.js,引入element-ui：
```
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

```

5、在nuxt.config.js配置element-ui插件:
```
module.exports = {

  plugins: ['~plugins/element-ui']
  
}
```

6、在pages/index.vue中使用element-ui, 加入组件:

```
<el-input v-model="input" placeholder="请输入内容"></el-input>
```

7、启动应用（npm run dev）,浏览器访问localhost:3000,控制台报错：

```
[Vue warn]: Injection "elForm" not found

found in
.....
.....

```
8、解决方法:在package.json的dependencies中加入如下依赖后执行安装 (cnpm install):
```
  "dependencies": {
    "element-ui": "^2.0.7",
    "nuxt": "^1.0.0-rc11",
    "vue": "2.5.2",
    "vue-server-renderer": "2.5.2",
    "vue-template-compiler": "2.5.2"
  },
```

9、启动应用（npm run dev）,浏览器访问localhost:3000,控制台报错：
```
/Nuxt/procreate/node_modules/_vue-server-renderer@2.4.4@vue-server-renderer/index.js:8
 throw new Error(
 ^
Error:
Vue packages version mismatch:
- vue@2.5.2
- vue-server-renderer@2.4.4
This may cause things to work incorrectly. Make sure to use the same version for both.
```

10、解决方法，找到node_modules目录，发现里面有：

```
._vue@2.5.2@vue     ._vue@2.4.4@vue  
 
 ._vue-template-compiler@2.5.2@vue-template-compiler  ._vue-template-compiler@2.4.4@vue-template-compiler
 
 ._vue-server-renderer@2.5.2@vue-server-renderer   ._vue-server-renderer@2.4.4@vue-server-renderer
```

vue  vue-template-compiler  vue-server-renderer 都有两个版本存在，删除2.4.4版本，保存2.5.2版本。


11、启动应用（npm run dev）,浏览器访问localhost:3000，OK.

12、将element-ui打包到库文件中的配置,在nuxt.config.js中加入(官方文档原话:实际上， vue-notifications 会被打包至应用的脚本代码里， 但是它属于第三方库，我们理应将它打包至库文件里以获得更好的缓存效果。（译者注：应用代码比库文件修改频繁，应尽量将第三方库打包至单独的文件中去）。):
```
module.exports = {
  build: {
    vendor: ['element-ui']
  },
}
```
