# cloud-music

> vue2.x + vuex + vue-router + axios + flexible + scss 仿网易云音乐webapp

## Build Setup

``` bash
# 安装依赖
npm install

# 执行并预览(localhost:9000)
npm run dev

# 打包构建
npm run build

```

## 效果

![](http://7xt6mo.com1.z0.glb.clouddn.com/%295HNE@HP_3JN%7DI2QBJSIRD7.png)

## 简介
#### vue + vue-router + vuex
主体部分是vue全家桶，不解释

#### axios
用axios作为http模块，优雅的promise写法，可进行全局的请求拦截和改写，统一处理出错请求，设定全局的请求变量。缺点是：不支持jsonp


#### flexible
[移动端自适应方案](https://github.com/amfe/lib-flexible)

#### scss 
css 预处理器，不解释

## tip
> 其他相关问题及解决方案

#### 跨域
使用node反向代理跨域，详情见`config/index`

#### 数据
由于网易的请求比较难扒下来，但是花费的代价有点大，因此并没有请求真是的网易接口
而是请求一份数据后存下来，以[easy-mock](https://easy-mock.com/)作为后台数据源模拟真实的请求

#### flexible相关的2x和3x图片问题以及字体使用px问题
移动端适配常见问题，可采用全局的mixin，以配置CSSResource插件，可直接书写全局的scss模块。更多适配问题请移步[移动端高清、多屏适配方案 ](http://div.io/topic/1092),[理解flexible.js所需的viewport知识](https://segmentfault.com/a/1190000004403496)

## 其他
此项目vue移动端的探索项目，将[网易云](https://music.163.com/m/)的webapp作为参考对象，是因为它简单但功能齐全，各种问题解决方案都可以进行尝试，因此很多模块功能和代码都是浅尝辄止，以探索为主，功能比较简陋，代码也比较简单。现在主体架构基本完成，剩下的【音乐详情】，【评论】等功能可作为练手内容自行进行扩充作为练习。


## 意见及建议
请移步qq群：629349675