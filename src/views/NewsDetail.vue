<template>
    <div class="page-requirement">
        <mu-container class="container-main">
            <mu-breadcrumbs class="page-breadcrumb" v-if="article">
                <mu-breadcrumbs-item to="/">首页</mu-breadcrumbs-item>
                <mu-breadcrumbs-item to="/news">新闻</mu-breadcrumbs-item>
                <mu-breadcrumbs-item disabled>{{ article.title }}</mu-breadcrumbs-item>
            </mu-breadcrumbs>
            <mu-row gutter>
                <mu-col span="6">
                    <div class="article-detail-box"  v-if="article">
                        <h1 class="article-title">{{ article.title }}</h1>
                        <div class="time">{{ article.createTime | simpleTime }}</div>
                        <article class="article" v-html="article.content">
                        </article>
                        <div class="tags">
                            <mu-badge class="tag" :content="tag" v-for="tag in tags"></mu-badge>
                        </div>
                    </div>
                </mu-col>
                <mu-col span="6">
                </mu-col>
            </mu-row>
        </mu-container>
        <div class="container container-main">
        </div>
    </div>
</template>

<script>
import {format} from '../util/time'
import {number} from '../util/filters'

export default {
    name: 'article_detail',
    title() {
        return '新闻详情'
    },
    data() {
        return {
            loading: false,
            article: null,
            tags: ['1', '2', '3']
        }
    },
    computed: {
    },
    asyncData({ store, route: { params: { id }}}) {
        let ret = store.dispatch('FETCH_ABOUT', 'asd')
        console.log('获取关于')
        return ret
    },
    mounted() {
        let articleId = this.$route.params.id
        this.loading = true
        this.$http.get(`/articles/${articleId}`).then(
            response => {
                let data = response.data
                this.article = data
                this.tags = this.article.split(',')
                this.loading = false
            },
            response => {
                console.log(response)
                this.loading = false
            })
    },
    methods: {
    },
    filters: {
        simpleTime(value) {
            return format(new Date(value), 'yyyy-MM-dd')
        }
    }
}
</script>
