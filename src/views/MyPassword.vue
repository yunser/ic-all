<template>
    <div class="page-login">
        <div class="container container-main">
            <mu-breadcrumbs class="page-breadcrumb">
                <mu-breadcrumbs-item to="/">首页</mu-breadcrumbs-item>
                <mu-breadcrumbs-item to="/me/profile">用户中心</mu-breadcrumbs-item>
                <mu-breadcrumbs-item disabled>修改密码</mu-breadcrumbs-item>
            </mu-breadcrumbs>
            <mu-row gutter>
                <mu-col span="4">
                    <user-nav />
                </mu-col>
                <mu-col span="8">
                    <mu-paper class="simple-paper" :z-depth="1">
                        <mu-text-field v-model="oldPassword" type="password" label="旧密码" />
                        <br>
                        <mu-text-field v-model="newPassword" type="password" label="新密码" />
                        <br>
                        <mu-text-field v-model="repeatPassword" type="password" label="新密码" />
                        <br>
                        <mu-button color="primary" @click="modify">修改</mu-button>
                    </mu-paper>
                </mu-col>
            </mu-row>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            oldPassword: '',
            newPassword: '',
            repeatPassword: ''
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    methods: {
        modify() {
            if (!this.oldPassword) {
                alert('请输入旧密码')
                return
            }
            if (!this.newPassword) {
                alert('请输入旧密码')
                return
            }
        }
    }
}
</script>
