<template>
    <div class="page-login">
        <div class="container container-main">
            <mu-breadcrumbs class="page-breadcrumb">
                <mu-breadcrumbs-item to="/">首页</mu-breadcrumbs-item>
                <mu-breadcrumbs-item disabled>用户中心</mu-breadcrumbs-item>
            </mu-breadcrumbs>
            <mu-row gutter>
                <mu-col sm="12" md="3">
                    <user-nav />
                </mu-col>
                <mu-col offset="1" sm="12" md="8">
                    <div class="user-box">
                        <h2>基本信息</h2>
                        <img class="avatar" src="/public/img/avatar_default.jpg">
                        {{ user.name }}
                        <div>邮箱：{{ user.email }}</div>
                        <div>电话：{{ user.phone }}</div>
                    </div>
                    <div v-if="!user">为大陆</div>
                </mu-col>
            </mu-row>
        </div>
    </div>
</template>

<script>

export default {
    name: 'my_profile',
    data () {
        return {
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>
