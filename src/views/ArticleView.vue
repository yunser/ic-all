<template>
    <div class="news-view">
        这是文章页面{{ id }}
        <div>
        </div>
        {{ content }}
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
            id: this.$route.params.id
        }
    },
    computed: {
        content () {
            return this.$store.state.articles[this.$route.params.id]
        }
    },
    asyncData ({ store, route: { params: { id }}}) {
        let ret = store.dispatch('FETCH_ARTICLE', { id })
        console.log('获取文章')
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
