<template>
    <div class="page-requirement-add">
        <div class="container container-main">
            <mu-breadcrumbs class="page-breadcrumb">
                <mu-breadcrumbs-item to="/">首页</mu-breadcrumbs-item>
                <mu-breadcrumbs-item to="/requirements">需求</mu-breadcrumbs-item>
                <mu-breadcrumbs-item disabled>采购需求发布</mu-breadcrumbs-item>
            </mu-breadcrumbs>
            <div class="requirement-box">
                <mu-tabs class="tab" :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)" :full-width="true">
                    <mu-tab>发布需求</mu-tab>
                    <!-- <mu-tab>快捷发布</mu-tab> -->
                </mu-tabs>
                <div class="demo-text" v-if="active1 === 0">
                    <div class="form">
                        <div class="form-item">
                            <mu-text-field v-model="requirement.spec" label="* 型号" />
                            <!-- 知道制造商或批次 -->
                        </div>
                        <div class="form-item">
                            <mu-text-field v-model="requirement.number" type="number" label="* 数量" suffix="PCS" />
                        </div>
                        <div class="form-item">
                            <mu-text-field v-model="requirement.note" label="说明" multi-line :rows="3" :rows-max="6"></mu-text-field>
                        </div>
                        <div class="form-item">
                            <mu-checkbox v-model="requirement.isPublic" label="公开发布，让30万现货商帮你找" />
                        </div>
                        <div class="form-item">
                            <mu-button color="primary" @click="submit">提交</mu-button>
                        </div>
                    </div>
                </div>
                <div class="demo-text" v-if="active1 === 1">
                    <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
                    <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
                    <p>“那么就去地狱找到你，我绝对不逃！”</p>
                    <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            requirement: {
                spec: '',
                number: null,
                note: '',
                isPublic: true
            },
            active1: 0
        }
    },
    computed: {
        aboutText () {
            return this.$store.state.about
        }
    },
    methods: {
        submit() {
            if (!this.requirement.spec) {
                alert('请输入型号')
                return
            }
            if (!this.requirement.number) {
                alert('请输入数量')
                return
            }
            this.$http.post(`/ic/requirements`, {
                userId: this.$store.state.user.id,
                number: this.requirement.number,
                spec: this.requirement.spec,
                note: this.requirement.note,
                isPublic: this.requirement.isPublic ? 1 : 0,
            }).then(
                response => {
                    alert('发布成功')
                    this.requirement.spec = ''
                    this.requirement.number = null
                    this.requirement.note = ''
                },
                response => {
                    console.log(response)
                })
        }
    }
}
</script>

<style lang="scss" scroped>
.tab {
    width: 400px;
}
.form {
    padding: 16px;
}
</style>