<template>
    <div class="page-login">
        <div class="container container-main">
            <div class="login-box">
                <div class="form-item">
                    <mu-text-field v-model="account" label="用户名" />
                </div>
                <div class="form-item">
                    <mu-text-field v-model="password" label="密码" />
                </div>
                <div class="form-item">
                    <mu-button color="primary" @click="login">登陆</mu-button>
                </div>
                <div class="info">
                    <router-link to="/register">注册账号</router-link>
                    <router-link to="/find_password">找回密码</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'login',
    data () {
        return {
            account: 'cjh',
            password: '123'
        }
    },
    methods: {
        login() {
            console.log('登陆')
            this.$http.post('/login', {
                account: this.account,
                password: this.password
            }).then(
                response => {
                    let data = response.data
                    console.log(data)
                    this.$storage.set('accessToken', data.accessToken)
                    this.$storage.set('user', data.user)
                    this.$store.state.user = data.user
                    this.$router.push('/')
                    // 获取 IC 用户信息
                    this.$http.get('/ic/users/' + data.user.id).then(
                        response => {
                            let icUser = response.data
                            data.user.score = icUser.score
                            this.$storage.set('user', data.user)
                            this.$store.state.user = data.user
                        },
                        response => {
                            console.log(response)
                        })
                },
                response => {
                    alert(response.msg)
                })
        }
    }
}
</script>
