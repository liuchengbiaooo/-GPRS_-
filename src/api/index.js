import { ajax } from '@/utils/request.js';

const BSAE = "/api";

//管理员登录
export function Login(phoneNumber, passWord) {
    return ajax({
        url: '/app/admin/login',
        method: "POST",
        params: { phoneNumber, passWord },
    })
}

//管理员查询所有电表 
export function allAmmeter(adminId, searchContent, page, limit) {
    return ajax({
        url: '/app/device/deviceList',
        method: "POST",
        params: { adminId, searchContent, page, limit },
    })
}

//管理员查询所有电表 
// createTimeStart, createTimeEnd
export function ammeterMoney(userId, page, limit, searchContent, createTimeEnd, createTimeStart) {
    return ajax({
        url: '/admin/order/adminOrderList',
        method: "POST",
        params: { userId, page, limit, searchContent, createTimeEnd, createTimeStart },
    })
}

//日常业务查询最近充值记录
export function rechargeMoney(userId) {
    return ajax({
        url: '/admin/order/LastFiveOrder',
        method: "POST",
        params: { userId },
    })
}
//日常业务充值
export function everydayRecharge(id, deviceCode, money) {
    return ajax({
        url: '/admin/order/Recharge',
        method: "POST",
        params: { id, deviceCode, money },
    })
}

//注销电表
export function logoutAmmeter(deviceRead) {
    return ajax({
        url: '/w/d/command/execute/',
        method: "POST",
        params: { deviceRead },
    })
}

//禁止充值
export function BanTopUp(id, payStatus) {
    return ajax({
        url: '/app/device/updateDevicePayStatus',
        method: "POST",
        params: { id, payStatus },
    })
}





//用户登录
export function userLogin(phoneNumber, passWord) {
    return ajax({
        url: '/app/user/login',
        method: "POST",
        params: { phoneNumber, passWord },
    })
}

//获取所有电表号
export function deviceAllList(adminId, page, limit) {
    return ajax({
        url: '/app/device/deviceAllList',
        method: "POST",
        params: { adminId, page, limit },
    })
}

//获取电价列表
export function electrovalences(adminId) {
    return ajax({
        url: '/app/price/priceList',
        method: "POST",
        params: { adminId },
    })
}

//电表信息录入
export function ammeterEntering(deviceInfo) {
    return ajax({
        url: '/app/device/editDeviceInfo',
        method: "POST",
        params: { deviceInfo },
    })
}

//获取验证码
export function verificationCode(phoneNumber) {
    return ajax({
        url: '/app/user/sendVcode',
        method: "POST",
        params: { phoneNumber },
    })
}

//用户注册
export function register(phoneNumber, passWord, vCode) {
    return ajax({
        url: '/app/user/register',
        method: "POST",
        params: { phoneNumber, passWord, vCode },
    })
}
//用户修改密码
export function amendPassword(phoneNumber, passWord, vCode) {
    return ajax({
        url: '/app/user/forgetPwd',
        method: "POST",
        params: { phoneNumber, passWord, vCode },
    })
}
//查询用户绑定的电表列表
export function ammeterList(page, limit, userId) {
    return ajax({
        url: '/app/device/queryUserDevice',
        method: "POST",
        params: { page, limit, userId },
    })
}
//解绑用户电表
export function bangammenter(deviceCode, userId) {
    return ajax({
        url: '/app/device/delRealtion',
        method: "POST",
        params: { deviceCode, userId },
    })

}
//模糊搜索电表
export function dimAmmeterList(page, limit, searchContent) {
    return ajax({
        url: '/app/device/searchDevice',
        method: "POST",
        params: { page, limit, searchContent },
    })
}
//绑定电表
export function bindingAmmeter(deviceCode, userId) {
    return ajax({
        url: '/app/device/addRealtion',
        method: "POST",
        params: { deviceCode, userId },
    })
}
//查询充值记录
export function rechargeList(page, limit, deviceCode) {
    return ajax({
        url: '/app/order/orderList',
        method: "POST",
        params: { page, limit, deviceCode },
    })
}

//绑定id
export function banID(userId, code) {
    return ajax({
        url: '/app/user/wxGZPreLogin',
        method: "POST",
        params: { userId, code },
    })
}

//用户支付
export function userpayment(deviceCode, userId, totalprice) {
    return ajax({
        url: '/api/wxgzh/pay',
        method: "POST",
        params: { deviceCode, userId, totalprice },
    })
}
//查询用户余额
export function userBalance(deviceRead) {
    return ajax({
        url: '/w/d/command/execute/',
        method: "POST",
        params: { deviceRead },
    })
}