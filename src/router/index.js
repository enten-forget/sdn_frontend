import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/',
        name: 'home',
        component: () => import("../views/template/Home.vue"),
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                meta: {
                    title: '系统首页'
                },
                component: () => import ( "../views/Dashboard/index.vue")
            },
            {
                path: "home",
                name: 'home',
                meta: {
                    title: 'SDN管理'
                },
                component: () => import( "../views/Home/index.vue" )
            },
            {
                path: "ryu",
                name: "ryu",
                component: () => import("../views/Home/index.vue"),
                children: [
                    {
                        path: 'watchtopo',
                        name: 'watchtopo',
                        components: {
                            panel: import("../views/ryu/watchtopo.vue")
                        },
                    },
                    {
                        path: 'watchrouter',
                        name: 'watchrouter',
                        components: {
                            panel: import("../views/ryu/watchrouter.vue")
                        },
                    },
                    {
                        path: 'watchrouter/flow/:id',
                        name: 'watchflow',
                        components: {
                            panel: import("../views/ryu/watchflow.vue")
                        },
                        props: true
                    },
                    {
                        path: 'add_flow',
                        name: 'add_flow',
                        components: {
                            panel: import("../views/ryu/add_flow.vue")
                        },
                    },
                    {
                        path: 'add_flow_by_file',
                        name: 'add_flow_by_file',
                        components: {
                            panel: import("../views/ryu/add_flow_by_file.vue")
                        },
                    },
                    {
                        path: 'delete_flow_by_id',
                        name: 'delete_flow_by_id',
                        components: {
                            panel: import("../views/ryu/delete_all_flow_entries.vue")
                        },
                    }
                ]
            },
            {
                path: "topo",
                name: "topo",
                component: () => import("../views/template/Home.vue"),
                children: [
                    {
                        path: 'add_host',
                        name: 'add_host',
                        component: () => import("../views/topo/add_host.vue")
                    },
                    {
                        path: 'add_link',
                        component: () => import("../views/topo/add_link.vue"),
                        name: 'add_link'
                    },
                    {
                        path: 'add_switch',
                        component: () => import("../views/topo/add_switch.vue"),
                        name: 'add_switch'
                    },
                    {
                        path: 'del_host',
                        component: () => import("../views/topo/del_host.vue"),
                        name: 'del_host'
                    },
                    {
                        path: 'del_switch',
                        component: () => import("../views/topo/del_switch.vue"),
                        name: 'del_switch'
                    },
                    {
                        path: 'start_net',
                        component: () => import("../views/topo/start_net.vue"),
                        name: 'start_net'
                    },
                    {
                        path: 'update_topo',
                        component: () => import("../views/topo/update_topo.vue"),
                        name: 'update_topo'
                    },
                    {
                        path: 'default_topo',
                        component: () => import("../views/topo/default_topo.vue"),
                        name: 'default_topo'
                    },
                    {
                        path: '/',
                        component: () => import("../components/default_route.vue"),
                        name: 'default_route'
                    },
                    {
                        path: 'del_link',
                        component: () => import("../views/topo/del_link.vue"),
                        name: 'del_link'
                    }
                ]
            },
        ]
    },
    {
        path: "/temp",
        name: "temp",
        component: () => import("../views/template/Home.vue"),
        children: [
            {
                path: "table",
                name: "basetable",
                meta: {
                    title: '表格'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/template/BaseTable.vue")
            },
            {
                path: "charts",
                name: "basecharts",
                meta: {
                    title: '图表'
                },
                component: () => import ( /* webpackChunkName: "charts" */ "../views/template/BaseCharts.vue")
            },
            {
                path: "form",
                name: "baseform",
                meta: {
                    title: '表单'
                },
                component: () => import ( /* webpackChunkName: "form" */ "../views/template/BaseForm.vue")
            },
            {
                path: "tabs",
                name: "tabs",
                meta: {
                    title: 'tab标签'
                },
                component: () => import ( /* webpackChunkName: "tabs" */ "../views/template/Tabs.vue")
            },
            {
                path: "donate",
                name: "donate",
                meta: {
                    title: '鼓励作者'
                },
                component: () => import ( /* webpackChunkName: "donate" */ "../views/template/Donate.vue")
            },
            {
                path: "permission",
                name: "permission",
                meta: {
                    title: '权限管理',
                    permission: true
                },
                component: () => import ( /* webpackChunkName: "permission" */ "../views/template/Permission.vue")
            },
            {
                path: "i18n",
                name: "i18n",
                meta: {
                    title: '国际化语言'
                },
                component: () => import ( /* webpackChunkName: "i18n" */ "../views/template/I18n.vue")
            },
            {
                path: "upload",
                name: "upload",
                meta: {
                    title: '上传插件'
                },
                component: () => import ( /* webpackChunkName: "upload" */ "../views/template/Upload.vue")
            },
            {
                path: "icon",
                name: "icon",
                meta: {
                    title: '自定义图标'
                },
                component: () => import ( /* webpackChunkName: "icon" */ "../views/template/Icon.vue")
            },
            {
                path: '404',
                name: '404',
                meta: {
                    title: '找不到页面'
                },
                component: () => import (/* webpackChunkName: "404" */ '../views/template/404.vue')
            },
            {
                path: '403',
                name: '403',
                meta: {
                    title: '没有权限'
                },
                component: () => import (/* webpackChunkName: "403" */ '../views/template/403.vue')
            },
            {
                path: 'user',
                name: 'user',
                meta: {
                    title: '个人中心'
                },
                component: () => import (/* webpackChunkName: "user" */ '../views/template/User.vue')
            },
            {
                path: 'editor',
                name: 'editor',
                meta: {
                    title: '富文本编辑器'
                },
                component: () => import (/* webpackChunkName: "editor" */ '../views/template/Editor.vue')
            }
        ]
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import ( /* webpackChunkName: "login" */ "../views/template/Login.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// 拦截器
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin'
            ? next()
            : next('/403');
    } else {
        next();
    }
});

export default router;
