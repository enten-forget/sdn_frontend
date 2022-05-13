import {defineConfig} from 'vite' // 使用 defineConfig 帮手函数，这样不用 jsdoc 注解也可以获取类型提示
import vue from '@vitejs/plugin-vue'

const path = require("path");

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

export default () => {
    return defineConfig({
        plugins: [vue()], //查看 插件 API 获取 Vite 插件的更多细节 https://www.vitejs.net/guide/api-plugin.html
        optimizeDeps: {
            include: ['schart.js']
        },
        resolve: {
            alias: {
                "@": resolve("src"),
            }
        },
        server: {
            port: 3000,
            strictPort: true,
            proxy: { // 代理
                '/api': {
                    target: 'http://localhost:8080/',
                    changeOrigin: true,
                    ws: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                },
                '/topo': {
                    target: 'http://localhost:2345/api/',
                    //mininet的bottle地址端口，这里的2345端口是自定义的
                    changeOrigin: true,
                    ws: true,
                    rewrite: (path) => path.replace(/^\/topo/, '')
                }
            }
        },
        build: {
            // outDir: '', //指定输出路径（相对于 项目根目录). 建议使用系统默认
            // assetsDir:'', // 指定生成静态资源的存放路径（相对于 build.outDir）
        }
    })
}
