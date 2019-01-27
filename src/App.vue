<template>
    <div id="app">
        <div class="page-wrap">
            <header class="page-header">
                <div class="container">
                    <mu-button class="menu-btn" icon color="#fff" @click="toggleDrawer" title="菜单">
                        <mu-icon value="menu"></mu-icon>
                    </mu-button>
                    <router-link class="logo-link" to="/" exact>
                        <img class="logo logo-text" src="/public/img/logo_text_white.svg" alt="logo">
                        <img class="logo logo-icon" src="/public/img/logo_white.svg" alt="logo">
                    </router-link>
                    <!-- <ul class="header-nav-list" v-if="screenWidth > 600"> -->
                    <ul class="header-nav-list" v-if="true">
                        <li class="item">
                            <router-link class="link" to="/">首页</router-link>
                        </li>
                        <li class="item">
                            <router-link class="link" to="/requirements">需求</router-link>
                        </li>
                        <li class="item">
                            <router-link class="link" to="/products">现货</router-link>
                        </li>
                        <li class="item">
                            <router-link class="link" to="/news">新闻</router-link>
                        </li>
                        <li class="item">
                            <router-link class="link" to="/about">关于</router-link>
                        </li>
                    </ul>
                    <!-- <router-link to="/top">Top</router-link>
                    <router-link to="/new">New</router-link>
                    <router-link to="/show">Show</router-link>
                    <router-link to="/ask">Ask</router-link>
                    <router-link to="/job">Jobs</router-link> -->
                    <div class="header-right">
                        <mu-button class="user-link" flat color="#fff" ref="button" to="/login" v-if="!user">登陆</mu-button>
                        <mu-button class="user-link" flat color="#fff" ref="button" @click="toggle" v-if="user">{{ user.name }}</mu-button>
                    </div>
                    <mu-popover cover :open.sync="open" :trigger="trigger">
                        <mu-list>
                            <mu-list-item button @click="goto('/me/profile')">
                                <mu-list-item-title>用户中心</mu-list-item-title>
                            </mu-list-item>
                            <mu-list-item button @click="goto('/me/score')">
                                <mu-list-item-title>我的积分</mu-list-item-title>
                            </mu-list-item>
                            <mu-divider />
                            <mu-list-item button @click="loginOut">
                                <mu-list-item-title>退出登陆</mu-list-item-title>
                            </mu-list-item>
                        </mu-list>
                    </mu-popover>
            </div>
            </header>
            <div class="page-body">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
            <footer class="page-footer">
                <div class="container">
                    <div class="logo-box">
                        <img class="logo" src="/public/img/logo_color.svg">
                    </div>
                    <div class="info">
                        <ul class="nav-list">
                            <li class="item">
                                <router-link class="link" to="/about">关于我们</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/about">联系我们</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/products">现货</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/requirements">需求</router-link>
                            </li>
                        </ul>
                        <div class="friend-box">
                            友情链接：
                            <ul class="link-list">
                                <li class="item" v-for="item in friendLinks">
                                    <a class="link" :href="item.url" target="_blank">{{ item.title }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="copyright">©2018 深圳新富林电子</div>
                        <div>
                            <a class="icp" href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备17151952号-4</a>
                        </div>
                    </div>
                    <img class="qrcode" src="/public/img/service_qrcode.png" />
                </div>
            </footer>
        </div>
        <ul class="side-nav-list">
            <li class="item">
                <i class="ic-icon ic-icon-qq"></i>
                <div class="text">QQ 客服</div>
            </li>
            <li class="item contact">
                <i class="ic-icon ic-icon-phone"></i>
                <div class="text">联系方式</div>
                <div class="contact-box">
                    <div>客服电话：0755-27838398</div>
                    <div>客服手机：156-0222-9283</div>
                    <div>贴片电容求购群：726046456</div>
                    <div class="qrcode-box">
                        <img class="qrcode" src="/public/img/service_qrcode.png" />
                        <div class="name">求芯网服务号</div>
                    </div>
                    <div></div>
                </div>
            </li>
            <li class="item" @click="toTop">
                <i class="ic-icon ic-icon-top"></i>
                <div class="text">返回顶部</div>
            </li>
        </ul>
        <mu-drawer :open.sync="drawerVisible" :docked="false">
            <div class="drawer-header" v-if="user">
                <img class="logo" src="/public/logo_primary.png" alt="logo">
                <router-link to="/me/profile">
                    <img class="avatar" src="/public/img/avatar_default.jpg">
                    <div class="user-name">{{ user.name }}</div>
                </router-link>
            </div>
            <div class="drawer-header" v-else>
                <img class="logo" src="/public/logo_primary.png" alt="logo">
                <router-link to="/me/profile">
                    <img class="avatar" src="/public/img/avatar_default.jpg">
                    <div class="user-name">未登录</div>
                </router-link>
            </div>
            <mu-list @change="toggleDrawer">
                <mu-list-item button to="/">
                    <mu-list-item-action>
                        <mu-icon value="home"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>首页</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button to="/requirements">
                    <mu-list-item-action>
                        <mu-icon value="send"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>需求2</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button to="/products">
                    <mu-list-item-action>
                        <mu-icon value="send"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>现货</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button to="/news">
                    <mu-list-item-action>
                        <mu-icon value="send"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>新闻</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button to="/about">
                    <mu-list-item-action>
                        <mu-icon value="info"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>关于我们</mu-list-item-title>
                </mu-list-item>
            </mu-list>
        </mu-drawer>
    </div>
</template>

<script>
export default {
    data () {
        return {
            open: false,
            drawerVisible: false,
            trigger: null,
            keyword: '',
            keywords: ['单片机', '72MHz', '1Mb', '电感'],
            friendLinks: [
                {
                    title: '新富林电子',
                    url: 'http://www.xfl1688.com/'
                },
                {
                    title: '贴片电容',
                    url: 'http://www.xfl1688.com/'
                },
                {
                    title: '百度两下',
                    url: 'http://www.baidu.com'
                }
            ],
            screenWidth: 0
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    mounted() {
        let user = this.$storage.get('user')
        if (user) {
            console.log('用户啊', user)
            this.$store.state.user = user
        }
        let accessToken = this.$storage.get('accessToken')
        if (accessToken) {
            this.$store.state.accessToken = accessToken
        }
        this.$nextTick(() => {
            this.trigger = this.$refs.button.$el
        })
        this.onResize()
        document.addEventListener('resize', this._onResize = () => {
            this.onResize()
        })
    },
    destroyed() {
        document.removeEventListener('resize', this._onResize)
    },
    methods: {
        onResize() {
            this.$store.state.screenWidth = window.innerWidth
            this.screenWidth = window.innerWidth
            console.log(window.innerWidth)
        },
        toggleDrawer() {
            this.drawerVisible = !this.drawerVisible
        },
        goto(path) {
            this.open = false
            this.$router.push(path)
        },
        loginOut() {
            this.open = false
            this.$storage.set('user', null)
            this.$storage.set('accessToken', null)
            this.$store.state.accessToken = this.$store.state.user = null
            this.$router.go(0)
        },
        toggle() {
            this.open = !this.open
            this.trigger = this.$refs.button.$el
        },
        toTop() {
            location.href = '#'
        }
    },
    watch: {
        user() {
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
