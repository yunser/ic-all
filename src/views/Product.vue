<template>
    <div class="page-requirement">
        <div class="container container-main">
            <div class="btns">
                <mu-button color="primary" to="/product/add">发布现货</mu-button>
            </div>
            <div class="header">
                <div class="col-time">发布时间</div>
                <div class="col-spec">型号</div>
                <div class="col-number">数量</div>
                <div class="col-note">备注</div>
                <!-- <div class="col-contact">联系人</div> -->
            </div>
            <ul class="requirement-list">
                <li class="item" v-for="item of data">
                    <div class="col-time">{{ item.createTime }}</div>
                    <div class="col-spec">
                        <router-link :to="'/products/' + item.id">{{ item.name }}</router-link>
                    </div>
                    <div class="col-number"><span class="strong">{{ item.number | number }}</span> PCS</div>
                    <div class="col-note">{{ item.note }}</div>
                    <!-- <div class="col-contact">
                        {{ item.user.name }}
                        <div class="contact-detail">
                            1212
                            <div>121212</div>
                        </div>
                    </div> -->
                </li>
            </ul>
            <mu-pagination :total="pagination.totalPage"
                :current.sync="pagination.currentPage"
                :page-size="20"
                @change="onPageChange" v-if="totalPage > 1"></mu-pagination>
        </div>
    </div>
</template>

<script>
import {format} from '../util/time'
import {number} from '../util/filters'

export default {
    name: 'requiremens',
    title() {
        return '现货'
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
            this.$http.get(`/ic/products?page=${this.pagination.currentPage}`).then(
                response => {
                    let data = response.data
                    console.log(data)
                    this.data = data
                    for (let item of this.data) {
                        let now = new Date()
                        let time = new Date(item.createTime)
                        if (time.getFullYear() === now.getFullYear() && time.getMonth() === now.getMonth() &&
                            time.getDate() === now.getDate()) {
                            item.createTime = format(new Date(item.createTime), 'hh:mm')
                        } else {
                            item.createTime = format(new Date(item.createTime), 'yyyy-MM-dd hh:mm')
                        }
                    }
                    console.log(response)
                    this.pagination.total = parseInt(response.headers['x-total'])
                    this.pagination.totalPage = parseInt(response.headers['x-total-page'])
                    // this.pagination.total = parseInt(data.headers['x-total'])
                },
                response => {
                    console.log(response)
                })
        }
    },
    filters: {
        number(value) {
            return number(value)
        }
    }
}
</script>
