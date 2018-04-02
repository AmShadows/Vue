import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import admin from "../components/admin.vue";
import build from "../components/build.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/admin",
        component: admin
    },
    {
        path: "/build",
        component: build
    },
    //重定向
    {
        path: '/', 
        redirect: '/admin' 
    }
]

var router =  new VueRouter({
    routes
})
export default router;