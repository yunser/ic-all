<template>
    <div class="page-login">
        <div class="container container-main">
            <mu-breadcrumbs class="page-breadcrumb">
                <mu-breadcrumbs-item to="/">首页</mu-breadcrumbs-item>
                <mu-breadcrumbs-item to="/me/profile">用户中心</mu-breadcrumbs-item>
                <mu-breadcrumbs-item disabled>我的积分</mu-breadcrumbs-item>
            </mu-breadcrumbs>
            <mu-row gutter>
                <mu-col span="4">
                    <user-nav />
                </mu-col>
                <mu-col span="8">
                    <div class="user-box">
                        <h2>我的积分</h2>
                        <img class="avatar" src="/public/img/avatar_default.jpg">
                        {{ user.name }}
                        {{ user.score }}
                    </div>
                    <div v-if="!user">为大陆</div>
                    <mu-data-table stripe fit :columns="columns" :data="data">
                    </mu-data-table>
                </mu-col>
            </mu-row>
        </div>
    </div>
</template>

<script>
import {format} from '../util/time'

export default {
    name: 'score',
    data () {
        return {
            sort: {
                name: '',
                order: 'asc'
            },
            columns: [
                { title: '变更时间', width: 200, name: 'createTime' },
                { title: '积分变更', name: 'number', width: 126},
                { title: '操作', name: 'description'}
            ],
            data: [
            ]
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    mounted() {
        let userId = this.$store.state.user.id
        this.$http.get(`/ic/users/${userId}/score_logs`).then(
            response => {
                let data = response.data
                console.log(data)
                this.data = data
                for (let item of this.data) {
                    item.createTime = format(new Date(item.createTime), 'yyyy-MM-dd hh:mm')
                    item.createTime = format(new Date(item.createTime), 'yyyy-MM-dd hh:mm')
                }
            },
            response => {
                console.log(response)
            })
    },
    methods: {
    }
}
</script>
