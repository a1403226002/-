// 权限验证

// 引入路由
import router from "./router/index"
// 引入登录
// import loginApp from "./api/test"



router.beforeEach((to, from, next) => {
    // 获取本地token
    let token = localStorage.getItem("ff_token")
    //判断 没有token
    if (!token) {
        //要跳转的是非登录页
        if (to.path !== "/login") {
            localStorage.removeItem("ff_shuju")
            next("/login")
        } else {
            next()
        }
    } else {
        //有token的情况下判断他是否进入到登录页
        //获取本地存储的用户信息
        let shuju = localStorage.getItem("ff_shuju")

        //判断是否有用户信息
        if (!shuju) {
            localStorage.removeItem("ff_token")
            next('/login')
        } else {
            next()
        }
    }
})