<template>
    <div class="page-login">
        <div class="container container-main">
            <div class="login-box">
                <div class="form-item">
                    <mu-text-field v-model="email" label="邮箱" />
                </div>
                <div class="form-item">
                    <mu-text-field v-model="password" label="密码" />
                </div>
                <div class="form-item">
                    <mu-text-field v-model="confirmPassword" label="确认密码" />
                </div>
                <div class="form-item">
                    <mu-text-field class="input-sm" v-model="code" label="验证码" />
                    <mu-button flat color="primary" @click="getCode">获取验证码</mu-button>
                </div>
                <div class="form-item">
                    <mu-checkbox v-model="agree" label="" />
                    <span>阅读并同意 <a href="/agreement" target="_blank">《采芯网用户服务协议》</a></span>
                </div>
                <div class="form-item">
                    <mu-button color="primary" @click="register">注册</mu-button>
                </div>
                <div class="info">
                    <router-link to="/login">立即登录</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'register',
    data () {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            code: '',
            agree: true
        }
    },
    mounted() {
        this.debug()
    },
    methods: {
        debug() {
            this.email = '1418503647@qq.com'
            this.password = '1'
            this.confirmPassword = '1'
        },
        getCode() {
            if (!this.email) {
                alert('请输入邮箱')
                return
            }
            if (new Date().getTime() - this.emailSendTime < 60 * 1000) {
                alert('请一分钟后再试')
                return
            }
            
            this.$http.get(`/send_register_code?email=${this.email}`).then(
                response => {
                    this.sendEmailSuccess()
                },
                response => {
                    console.log(response)
                })
        },
        sendEmailSuccess() {
            this.emailSendTime = new Date().getTime()
        },
        regsiter() {
            if (!this.email) {
                alert('请输入邮箱')
                return
            }
            if (!this.password) {
                alert('请输入密码')
                return
            }
            if (!this.confirmPassword) {
                alert('请输入确认密码')
                return
            }
            if (this.password !== this.confirmPassword) {
                alert('两次密码输入不一致')
                return
            }
            if (!this.code) {
                alert('请输入验证码')
                return
            }
            this.$http.post('/ic/register', {
                email: this.email,
                password: this.password,
                code: this.code
            }).then(
                response => {
                    let data = response.data
                    console.log(data)
                    alert('注册成功')
                    this.$router.push('/login')
                },
                response => {
                    alert('呵呵')
                    console.log(response)
                })
        }
    }
}
</script>
