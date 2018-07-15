<template>
    <div class="page-home">
        <div class="container">
            <div class="search-wrap">
                <img class="logo" src="/public/logo_primary.png">
                <div class="search-box">
                    <input class="input" v-model="keyword" placeholder="输入元器件型号/关键词">
                    <a class="btn" href="#" @click.prevent="search">搜索</a>
                </div>
                <div class="keyword-box">
                    <span class="search-text">热搜：</span>
                    <ul class="keyword-list">
                        <li class="item" v-for="item in keywords">
                            <router-link class="link" :to="'/search?keyword' + item">{{ item }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <router-link to="/company/register">申请入驻</router-link>
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=394072640&site=qq&menu=yes">
            <img border="0" src="http://wpa.qq.com/pa?p=2:451295859:41" alt="点击这里给我发消息" title="点击这里给我发消息">
            1221212
        </a>

        <div class="apply-box">
            <div>申请入驻</div>
            <div>只需简单三步</div>
            <ul>
                <li class="item">
                    <div class="icon icon-1"></div>
                    <div class="text">注册求芯网</div>
                </li>
                <li class="item">
                    <div class="icon icon-2"></div>
                    <div class="text">申请入驻</div>
                </li>
                <li class="item">
                    <div class="icon icon-1"></div>
                    <div class="text">等待审核</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'item-list',
    title () {
        return '求芯网 - 电子元器件产业服务平台'
    },
    // keywords() {
    //     return '呵呵哒'
    // },
    props: {
        type: String
    },
    data () {
        return {
            keyword: '',
            keywords: ['单片机', '72MHz', '1Mb', '电感']
        }
    },
    computed: {
    },
    asyncData ({ store, route: { params: { id }}}) {
        let ret = store.dispatch('FETCH_ABOUT', 'asd')
        console.log('获取关于')
        return ret
    },
    beforeMount () {
    },
    beforeDestroy () {
    },
    methods: {
        search() {
            if (!this.keyword) {
                return
            }
            this.$router.push('/search?keyword=' + this.keyword)
        }
    }
}
</script>
