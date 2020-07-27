module.exports={
    devServer:{
        proxy:{
            '/api' :{
                target:'https://m.maizuo.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
                  }
            }
        }
    }
}
/* 反向代理在浏览器只能看到发送了请求给localhost因为localhost做了第三方帮忙反向代理了 */
/* 我们在浏览器只能看到错误的路径,因为我们接受响应的信息也是在第三方返回的 */