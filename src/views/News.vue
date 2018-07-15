<template>
    <div class="page-requirement">
        <div class="container container-main">
            <ul class="article-list">
                <li class="item" v-for="item of data" @click="viewNews(item)">
                    <img class="avatar" src="/public/article.jpg">
                    <h3 class="title">{{ item.title }}</h3>
                    <div class="content">{{ item.content }}</div>
                    <div class="time">{{ item.createTime | simpleTime}}</div>
                </li>
            </ul>
            <mu-pagination :total="pagination.totalPage"
                :current.sync="pagination.currentPage"
                :page-size="20"
                @change="onPageChange" v-if="pagination.totalPage > 1"></mu-pagination>
        </div>
    </div>
</template>

<script>
import {format} from '../util/time'
import {number} from '../util/filters'

export default {
    name: 'requiremens',
    title() {
        return '新闻'
    },
    data() {
        return {
            pagination: {
                total: 1,
                totalPage: 1,
                currentPage: 1
            },
            data: []
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
        this.loadData()
    },
    methods: {
        onPageChange() {
            this.loadData()
        },
        loadData() {
            this.$http.get(`/u/2/articles?page=${this.pagination.currentPage}`).then(
                response => {
                    let data = response.data
                    console.log(data)
                    this.data = data
                    // for (let item of this.data) {
                    //     let now = new Date()
                    //     let time = new Date(item.createTime)
                    //     if (time.getFullYear() === now.getFullYear() && time.getMonth() === now.getMonth() &&
                    //         time.getDate() === now.getDate()) {
                    //         item.createTime = format(new Date(item.createTime), 'hh:mm')
                    //     } else {
                    //         item.createTime = format(new Date(item.createTime), 'yyyy-MM-dd hh:mm')
                    //     }
                    // }
                    console.log(response)
                    this.pagination.total = parseInt(response.headers['x-total'])
                    this.pagination.totalPage = parseInt(response.headers['x-total-page'])
                    // this.pagination.total = parseInt(data.headers['x-total'])
                },
                response => {
                    console.log(response)
                })
        },
        viewNews(item) {
            this.$router.push('/news/' + item.id)
        }
    },
    filters: {
        simpleTime(value) {
            return format(new Date(value), 'yyyy-MM-dd')
        }
    }
}
</script>
