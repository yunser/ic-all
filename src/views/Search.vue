<template>
    <div class="page-search">
        <div class="container container-main">
            这是搜索页面
            <div>
                <router-link to="/about">关于</router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'search',
    props: {
        type: String
    },
    data () {
        return {
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
    }
}
</script>
