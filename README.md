## Router使用方式

在页面添加 `navigate`类型是 `Array` 对应值是：`['navigateTo', 'switchTab', 'reLaunch', 'redirectTo']`

用法

```js
// 文件目录 pages/home/index.vue


export default {
  navigate: ['navigateTo']
}
// 会生成 navigateTo 跳转的方式
// 会生成 name 值为 所在文件夹的名称(home)

export default {
  navigate: ['navigateTo', 'switchTab']
}
// 会生成navigateTo、switchTab跳转的方式
// 会生成两条数据
// navigateTo 对应 name 值为 所在文件夹的名称(home)
// switchTab 对应 name 值为 所在文件夹的名称(swhome)

// 其他方式对应值
// reLaunch 对应 name 值为 所在文件夹的名称(relhome)
// redirectTo 对应 name 值为 所在文件夹的名称(redhome)

```

```js
this.$minRouter.push({
	// 这里的 name 对应上面生成的 name 值
    name: 'home',
    // params 是页面传参类型最好是 Object
    params: { id: 1 }
})


// 不传参时可以直接如下写法
this.$minRouter.push('swhome')


// 获取页面参数
this.$parseURL()

```

项目中文件目录 `router/index.js` 

可以设置路由拦截用法和 `Vue` 全局前置钩子类似
