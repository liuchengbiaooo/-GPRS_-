module.exports = {
    publicPath: './',
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                import: [
                    './src/theme',
                ],
            },
        },
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true,
        },
    },
    lintOnSave: false
    // devServer: {
    //     open: true,
    //     host: 'localhost',
    //     port: 8080,
    //     https: false,
    //     proxy: { //配置跨域
    //         '/api': {
    //             target: 'http://47.107.227.121:8018', //这里后台的地址模拟的;应该填写你们真实的后台接口
    //             ws: true,
    //             changOrigin: true, //允许跨域
    //             pathRewrite: {
    //                 '^/api': '' //请求的时候使用这个api就可以
    //             }
    //         }

    //     }
    // }
};