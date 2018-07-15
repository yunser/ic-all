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
                        <img class="logo logo-icon" src="/public/img/logo_color.svg" alt="logo">
                    </router-link>
                    <ul class="header-nav-list" v-if="screenWidth > 600">
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

                    <mu-button class="user-link" flat color="#fff" ref="button" to="/login" v-if="!user">登陆</mu-button>
                    <mu-button class="user-link" flat color="#fff" ref="button" @click="toggle" v-if="user">{{ user.name }}</mu-button>
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
                    友情链接：
                    <ul class="link-list">
                        <li class="item" v-for="item in friendLinks">
                            <a class="link" :href="item.url" target="_blank">{{ item.title }}</a>
                        </li>
                    </ul>
                    <div>
                        <a href="http://www.miitbeian.gov.cn/" target="_blank"></a>
                        
</div>
                </div>
            </footer>
        </div>
        <ul class="side-nav-list">
            <li>
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
        }
    },
    watch: {
        user() {
        }
    }
}
</script>

<style lang="scss" scoped>
    .page-wrap {
        // position: absolute;
        // top: 0;
        // left: 0;
        // right: 0;
        // bottom: 0;
        display: flex;
        flex-direction: column;
    }
    .page-header {
        background-color: #000;
        .container {
            display: flex;
            align-items: center;
            height: 56px;
        }
        a {
            color: #fff;
        }
        .logo-link {
            margin-top: 4px;
            margin-right: 32px;
        }
        .logo-text {
            margin-right: 8px;
        }
        .logo {
            height: 32px;
        }
        .user-link {
            // position: relative;
            color: #fff;
            // margin-left: auto;
        }
    }
    .page-body {
        flex-grow: 1;
        min-height: 500px;
    }
    .page-footer {
        padding: 24px 0;
        color: #fff;
        background-color: #333;
    }
    .link-list {
        display: flex;
        flex-wrap: wrap;
        .item {
            margin-right: 16px;
        }
        .link {
            color: #fff;
        }
    }
    @media all and (min-width: 600px) {
        .menu-btn {
            display: none;
        }
    }
</style>
