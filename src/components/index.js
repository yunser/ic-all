// import page from './page'
import userNav from './user-nav'

export default {
    install: function (Vue) {
        // Vue.component('my-page', page)
        Vue.component('user-nav', userNav)
    }
}
