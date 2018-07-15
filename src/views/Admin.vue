<template>
    <div class="news-view">
        这是测试页面
        <div>
            <router-link to="/about">关于</router-link>
        </div>
        {{ aboutText }}
    </div>
</template>

<script>

export default {
    name: 'item-list',
    props: {
        type: String
    },
    data () {
        return {
        }
    },
    computed: {
        aboutText () {
            return this.$store.state.about
        }
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
    }
}
</script>
