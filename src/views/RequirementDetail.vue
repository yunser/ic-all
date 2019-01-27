<template>
    <div class="page-requirement">
        <mu-container class="container-main">
            <mu-breadcrumbs class="page-breadcrumb">
                <mu-breadcrumbs-item to="/">首页</mu-breadcrumbs-item>
                <mu-breadcrumbs-item to="/requirements">需求</mu-breadcrumbs-item>
                <mu-breadcrumbs-item disabled>需求详情</mu-breadcrumbs-item>
            </mu-breadcrumbs>
            <mu-row gutter>
                <mu-col span="6">
                    <div class="requirement-detail-box" v-if="requirement">
                        <mu-avatar :size="size">
                            <img class="avatar" src="/public/img/avatar_default.png" alt="头像">
                        </mu-avatar>
                        {{ requirement.user.name }}
                        <div class="requirement">
                            <div class="spec">{{ requirement.spec }}</div>
                            <div>采购 {{ requirement.number | number}} PCS</div>
                            <div>{{ requirement.note }}</div>
                        </div>
                        
                        {{ requirement }}
                    </div>
                </mu-col>
                <mu-col span="6">
                    <div class="side-av-box">
                        <div class="container">
                            <a href="" target="_blank">
                                <img class="av-img" src="/public/img/ad_side.png">
                            </a>
                        </div>
                    </div>
                </mu-col>
            </mu-row>
            <h2>相关需求</h2>
            <ul class="recommend-list" v-if="requirements">
                <mu-row gutter>
                    <mu-col span="3" class="item" v-for="item in requirements" :key="item.id">
                        <div class="requirement">
                            <div class="spec">{{ requirement.spec }}</div>
                            <div>采购 {{ requirement.number | number}} PCS</div>
                            <div>{{ requirement.note }}</div>
                        </div>
                    </mu-col>
                </mu-row>
            </ul>
        </mu-container>
        <div class="container container-main">
        </div>
    </div>
</template>

<script>
import {format} from '../util/time'
import {number} from '../util/filters'

export default {
    name: 'requiremen_detail',
    title() {
        return '需求详情'
    },
    data() {
        return {
            requirement: null,
            requirements: null
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
        let requirementId = this.$route.params.id
        this.$http.get(`/ic/requirements/${requirementId}`).then(
            response => {
                let data = response.data
                this.requirement = data
                // for (let item of this.data) {
                //     let now = new Date()
                //     let time = new Date(item.createTime)
                //     if (time.getFullYear() === now.getFullYear() && time.getMonth() === now.getMonth() &&
                //         time.getDate() === time.getDate()) {
                //         item.createTime = format(new Date(item.createTime), 'hh:mm')
                //     } else {
                //         item.createTime = format(new Date(item.createTime), 'yyyy-MM-dd hh:mm')
                //     }

                //     if (item.number > 1000 && item.number % 1000 === 0) {
                //         item.number = item.number / 1000 + 'k'
                //     }
                // }
            },
            response => {
                console.log(response)
            })
        // 相关需求
        this.$http.get(`/ic/requirements`).then(
            response => {
                let data = response.data
                this.requirements = data.slice(0, 3)
                // for (let item of this.data) {
                //     let now = new Date()
                //     let time = new Date(item.createTime)
                //     if (time.getFullYear() === now.getFullYear() && time.getMonth() === now.getMonth() &&
                //         time.getDate() === time.getDate()) {
                //         item.createTime = format(new Date(item.createTime), 'hh:mm')
                //     } else {
                //         item.createTime = format(new Date(item.createTime), 'yyyy-MM-dd hh:mm')
                //     }

                //     if (item.number > 1000 && item.number % 1000 === 0) {
                //         item.number = item.number / 1000 + 'k'
                //     }
                // }
            },
            response => {
                console.log(response)
            })
    },
    methods: {
    },
    filters: {
        number(value) {
            return number(value)
        }
    }
}
</script>
