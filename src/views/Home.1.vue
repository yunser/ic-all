<template>
    <div class="page-home">
        <div class="container">
            <div class="search-wrap">
                <img class="logo" src="/public/img/logo_color.svg">
                <div class="search-box">
                    <input class="input" v-model="keyword" placeholder="输入元器件型号/关键词">
                    <a class="btn" href="#" @click.prevent="search">找现货</a>
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
            <div class="simple-requirement-box">
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
            </div>

        </div>
        <router-link to="/company/register">申请入驻</router-link>
        <a target="_blank" href="https://wpa.qq.com/msgrd?v=3&uin=394072640&site=qq&menu=yes">
            <img border="0" src="https://wpa.qq.com/pa?p=2:451295859:41" alt="点击这里给我发消息" title="点击这里给我发消息">
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

        <div class="av-box">
            <div class="container">
                <a href="" target="_blank">
                    <img class="av-img" src="/public/img/ad_index.png">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {format} from '../util/time'
import {number} from '../util/filters'

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
            keywords: ['单片机', '72MHz', '1Mb', '电感'],
            data: []
        }
    },
    computed: {
    },
    asyncData ({ store, route: { params: { id }}}) {
        let ret = store.dispatch('FETCH_ABOUT', 'asd')
        console.log('获取关于')
        return ret
    },
    mounted() {
        this.loadData()
    },
    methods: {
        loadData() {
            this.$http.get(`/ic/requirements`).then(
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
        search() {
            if (!this.keyword) {
                return
            }
            this.$router.push('/search?keyword=' + this.keyword)
        }
    },
    filters: {
        number(value) {
            return number(value)
        }
    }
}
</script>
