module.exports = {
    //参考 https://cli.vuejs.org/zh/config/#devserver
    // 反向代理
    devServer: {
        open: true,
        host: 'localhost',
        // host: 'http://sunnywanggitee.gitee.io',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            // 配置跨域
            '/api': {
                target: 'https://vuets-api.herokuapp.com/api/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => {}
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/my-courses-system-preview/'
        : '/'

};
