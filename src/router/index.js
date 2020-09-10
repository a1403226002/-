import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/index.vue"),
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/index.vue"),
    redirect: "/home/zong",
    children: [
      {
        path: "/home/zong",
        name: "zong",
        component: () => import("../views/home/zong.vue"),
        redirect: "/home/zong/houShou",
        children: [
          {
            path: "/home/zong/houShou",
            name: "homezonghouShou",
            component: () => import("../views/home/houShou.vue"),
          },
          {
            path: "/home/zong/xiangce",
            name: "homezongxiangce",
            component: () => import("../views/home/xiangce.vue"),
          },
        ]
      },
      {
        path: "/shangpin",
        name: "shangpin",
        component: () => import("../views/shangpin/index.vue"),
        redirect: "/shangpin/liebiao",
        children: [
          {
            path: "/shangpin/liebiao",
            name: "shangpin/liebiao",
            component: () => import("../views/shangpin/liebiao.vue"),
          },
          {
            path: "/shangpin/fenlei",
            name: "shangpin/fenlei",
            component: () => import("../views/shangpin/fenlei.vue"),
          },
          {
            path: "/shangpin/guige",
            name: "shangpin/fenlei",
            component: () => import("../views/shangpin/guige.vue"),
          },
          {
            path: "/shangpin/leixing",
            name: "shangpin/fenlei",
            component: () => import("../views/shangpin/leixing.vue"),
          },
          {
            path: "/shangpin/pinglun",
            name: "shangpin/fenlei",
            component: () => import("../views/shangpin/pinglun.vue"),
          },
        ]
      },
      {
        path: "/dingdan",
        name: "dingdan",
        component: () => import("../views/dingdan/index.vue"),
        redirect: "/dingdan/dingguan",
        children: [
          {
            path: "/dingdan/dingguan",
            name: "dingdandingguan",
            component: () => import("../views/dingdan/dingguan.vue"),
          },
          {
            path: "/dingdan/fapiao",
            name: "dingdanFapiao",
            component: () => import("../views/dingdan/fapiao.vue"),
          },
          {
            path: "/dingdan/shouhou",
            name: "dingdan/shouhou",
            component: () => import("../views/dingdan/shouhou.vue"),
          },
        ]
      },
      {
        path: "/huiyuan",
        name: "huiyuan",
        component: () => import("../views/huiyuan/index.vue"),
        redirect: "/huiyuan/huilie",
        children: [
          {
            path: "/huiyuan/huilie",
            name: "huiyuan/huilie",
            component: () => import("../views/huiyuan/huilie.vue"),
          },
          {
            path: "/huiyuan/huideng",
            name: "huiyuan/huideng",
            component: () => import("../views/huiyuan/huideng.vue"),
          },
        ]
      },
      {
        path: "/shezhi",
        name: "shezhi",
        component: () => import("../views/shezhi/index.vue"),
        redirect: "/shezhi/jichu",
        children: [
          {
            path: "/shezhi/jichu",
            name: "shezhi/jichu",
            component: () => import("../views/shezhi/jichu.vue"),
          },
          {
            path: "/shezhi/wuliu",
            name: "shezhi/wuliu",
            component: () => import("../views/shezhi/wuliu.vue"),
          },
          {
            path: "/shezhi/guanliyuan",
            name: "shezhi/guanliyuan",
            component: () => import("../views/shezhi/guanliyuan.vue"),
          },
          {
            path: "/shezhi/jiaoyi",
            name: "shezhi/jiaoyi",
            component: () => import("../views/shezhi/jiaoyi.vue"),
          },
        ]
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
