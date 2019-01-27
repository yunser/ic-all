<template>
    <div class="page-requirement">
        <div class="container container-main">
            <div class="btns">
                <mu-button color="primary" to="/requirement/add">发布需求</mu-button>
            </div>
            <div class="requirement-data-box">
                <div class="header">
                    <div class="col-time">发布时间</div>
                    <div class="col-spec">采购型号</div>
                    <div class="col-number">采购数量</div>
                    <div class="col-note">备注</div>
                    <div class="col-contact">联系人</div>
                </div>
                <ul class="requirement-list">
                    <li class="item" v-for="item of data">
                        <div class="col-time">{{ item.createTime }}</div>
                        <div class="col-spec">
                            <router-link :to="'/requirements/' + item.id">{{ item.spec }}</router-link>
                        </div>
                        <div class="col-number"><span class="strong">{{ item.number | number }}</span> PCS</div>
                        <div class="col-note">{{ item.note }}</div>
                        <div class="col-contact">
                            {{ item.user.name }}
                            <div class="contact-detail">
                                <ul class="contact-list">
                                    <li class="contact-item" @click="contactQQ(item.icuser.qq)">
                                        <!-- <span class="icon_qq"></span> -->
                                        QQ 联系
                                        <!-- {{ item.user.name }} -->
                                    </li>
                                    <li class="contact-item" @click.native="contactService">
                                        <!-- <span class="icon_qq"></span> -->
                                        联系客服
                                        <!-- {{ item.user.name }} -->
                                    </li>
                                    <li class="contact-item" @click.native="joinQQGroup">
                                        <!-- <span class="icon_qq"></span> -->
                                        加入官方 QQ 群
                                        <!-- {{ item.user.name }} -->
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
                <mu-pagination :total="pagination.totalPage"
                    :current.sync="pagination.currentPage"
                    :page-size="20"
                    @change="onPageChange" v-if="pagination.totalPage > 1"></mu-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import {format} from '../util/time'
import {number} from '../util/filters'

export default {
    name: 'requiremens',
    title() {
        return '需求'
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
            this.$http.get(`/ic/requirements?page=${this.pagination.currentPage}`).then(
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
        },
        contactQQ(qq) {
            window.open(`https://wpa.qq.com/msgrd?v=3&uin=${qq}&site=qq&menu=yes`)
        },
        contactService() {
            console.log('加群')
            window.open('https://shang.qq.com/wpa/qunwpa?idkey=11975aff9cb203c9896b47320a17545d3c80aaea08a18dfb1ab639553e6f05b1')
        },
        joinQQGroup() {
            console.log('加群')
            window.open('https://shang.qq.com/wpa/qunwpa?idkey=11975aff9cb203c9896b47320a17545d3c80aaea08a18dfb1ab639553e6f05b1')
        }
    },
    filters: {
        number(value) {
            return number(value)
        }
    }
}
</script>
