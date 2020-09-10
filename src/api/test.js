import axios from "@/utils/request"

export default {
    // 登录
    login(username, password) {
        return axios({
            url: "http://ceshi5.dishait.cn/admin/login",
            method: "post",
            data: {
                username,
                password
            }
        })
    },
    logout(data) {
        return axios({
            url: "http://ceshi5.dishait.cn/admin/logout",
            method: "post",
            data
        })
    }
}