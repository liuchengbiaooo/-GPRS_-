import axios from 'axios'


export function ajax(config) {
    //返回promise对象
    return new Promise((resolve, reject) => {
        //创建axios实例，把基本的配置放进去
        const instance = axios.create({
            //定义请求文件类型
            headers: {
                'content-Type': 'application/x-www-form-urlencoded'
                    //"Content-type": "application/json;charset=UTF-8",
            },
            timeout: 3000,
            method: 'post',
            //定义请求根目录
            baseURL: 'https://97.3xzt.com'
                // baseURL: 'http://172.20.10.1:8018'
        });
        // service.interceptors.response.use(
        //     response => {
        //         /**
        //          * code为非20000是抛错 可结合自己业务进行修改
        //          */
        //         const res = response.data
        //         tryHideFullScreenLoading();
        //         if (res.status !== 1) {
        //             const ref = response.data.info
        //             Message({
        //                 message: ref,
        //                 type: 'error',
        //                 duration: 3 * 1000
        //             })
        //             return Promise.reject('error')
        //         } else {
        //             return response.data
        //         }
        //     },
        //     error => {
        //         console.log('err' + error) // for debug
        //         Message({
        //             message: error.message,
        //             type: 'error',
        //             duration: 5 * 1000
        //         })
        //         return Promise.reject(error)
        //     }
        // )
        //请求成功后执行的函数
        instance(config).then(res => {
            //console.log(res);
            resolve(res.data);
            //失败后执行的函数
        }).catch(err => {
            //console.log(err);
            reject(err);
        })
    });
}