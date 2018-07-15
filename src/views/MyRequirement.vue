<template>
    <div class="page-login">
        <div class="container container-main">
            <mu-breadcrumbs class="page-breadcrumb">
                <mu-breadcrumbs-item to="/">首页</mu-breadcrumbs-item>
                <mu-breadcrumbs-item to="/me/profile">用户中心</mu-breadcrumbs-item>
                <mu-breadcrumbs-item disabled>我的需求</mu-breadcrumbs-item>
            </mu-breadcrumbs>
            <mu-row gutter>
                <mu-col span="4">
                    <user-nav />
                </mu-col>
                <mu-col span="8">
                    <mu-button color="primary" to="/requirement/add">发布需求</mu-button>
                    <!-- <mu-data-table stripe fit :columns="columns" :data="data">
                        1212
                    </mu-data-table> -->
                    <table>
                        <tr>
                            <th>型号</th>
                            <th>数量</th>
                            <th>备注</th>
                            <th>操作</th>
                        </tr>
                        <tr v-for="item in data">
                            <td>{{ item.spec }}</td>
                            <td>{{ item.number }}</td>
                            <td>{{ item.note }}</td>
                            <td>
                                1
                            </td>
                        </tr>
                    </table>
                    <mu-pagination :total="pagination.total"
                        :current.sync="pagination.currentPage"
                        :page-size="20"
                        @change="onPageChange"></mu-pagination>
                </mu-col>
            </mu-row>
        </div>
    </div>
</template>

<script>
import {format} from '../util/time'

export default {
    name: 'my_requirement',
    data () {
        return {
            pagination: {
                total: 1,
                totalPage: 1,
                currentPage: 1
            },
            columns: [
                { title: '型号', width: 200, name: 'spec' },
                { title: '数量', name: 'number', width: 126},
                { title: '备注', name: 'note'}
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
        this.loadData()
    },
    methods: {
        onPageChange() {
            this.loadData()
        },
        loadData() {
            let userId = this.$store.state.user.id
            this.$http.get(`/ic/users/${userId}/requirements`).then(
                response => {
                    let data = response.data
                    console.log(data)
                    this.data = data
                    for (let item of this.data) {
                        item.createTime = format(new Date(item.createTime), 'yyyy-MM-dd hh:mm')
                        item.createTime = format(new Date(item.createTime), 'yyyy-MM-dd hh:mm')
                    }
                    this.pagination.total = parseInt(response.headers['x-total'])
                    this.pagination.totalPage = parseInt(response.headers['x-total-page'])
                },
                response => {
                    console.log(response)
                })
        }
    }
}
</script>
