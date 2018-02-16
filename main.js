import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// Vue.component("time", {
// 	data: function() {
// 		return {
// 			clock: new Date().toLocaleString(), //moment().format("YYYY-MM-DD HH:mm:ss"),
// 		}
// 	},
// 	template: '<div id="time">{{clock}}</div>',
// 	created: function() {
// 		var that = this;
// 		setInterval(function() {
// 			that.clock = new Date().toLocaleString() //moment().format("YYYY-MM-DD HH:mm:ss");
// 		}, 1000)
// 	},
// });
// Vue.component("weather", {
// 	data: function() {
// 		return {
// 			weathers: [
// 				"今天 阴 11~4℃", "明天 晴 17~6℃", "后天 多云 13~5℃"
// 			],
// 		}
// 	},
// 	template: '<div id="weather">' + '	<ul>' + '		<li v-for="w in weathers">{{w}}</li>' + '	</ul>' + '</div>',
// });

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
	router,
	components: { App },
	template: '<App/>'
	// render: createEle => createEle(App)
}).$mount('#app');