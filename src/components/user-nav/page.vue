<template>
    <mu-list>
        <mu-list-item button :ripple="false" to="/me/requirements">
            <mu-list-item-action>
                <mu-icon value="inbox"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>我的需求</mu-list-item-title>
        </mu-list-item>
        <!-- <mu-list-item button :ripple="false" to="/me/products">
            <mu-list-item-action>
                <mu-icon value="inbox"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>我的库存</mu-list-item-title>
        </mu-list-item> -->
        <mu-list-item button :ripple="false" to="/me/subscribes">
            <mu-list-item-action>
                <mu-icon value="inbox"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>我的订阅</mu-list-item-title>
        </mu-list-item>
        <mu-divider />
        <mu-list-item button :ripple="false" to="/me/profile">
            <mu-list-item-action>
                <mu-icon value="inbox"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>个人资料</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" to="/me/messages">
            <mu-list-item-action>
                <mu-icon value="inbox"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>我的消息</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" to="/me/score">
            <mu-list-item-action>
                <mu-icon value="inbox"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>我的积分</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" to="/me/password">
            <mu-list-item-action>
                <mu-icon value="inbox"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>修改密码</mu-list-item-title>
        </mu-list-item>
    </mu-list>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
</style>
