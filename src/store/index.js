import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
    return new Vuex.Store({
        state: {
            user: null,
            activeType: null,
            itemsPerPage: 20,
            items: {/* [id: number]: Item */},
            users: {/* [id: string]: User */},
            articles: {},
            lists: {
                top: [/* number */],
                new: [],
                show: [],
                ask: [],
                job: []
            },
            about: ''
        },
        actions,
        mutations,
        getters,
        screenWidth: 0,
    })
}
