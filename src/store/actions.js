import {
    fetchUser,
    fetchItems,
    fetchIdsByType
} from '../api'
import http from '../util/http'

export default {
    // ensure data for rendering given list type
    FETCH_LIST_DATA: ({ commit, dispatch, state }, { type }) => {
        commit('SET_ACTIVE_TYPE', { type })
        return fetchIdsByType(type)
        .then(ids => commit('SET_LIST', { type, ids }))
        .then(() => dispatch('ENSURE_ACTIVE_ITEMS'))
    },

    // ensure all active items are fetched
    ENSURE_ACTIVE_ITEMS: ({ dispatch, getters }) => {
        return dispatch('FETCH_ITEMS', {
        ids: getters.activeIds
        })
    },

    FETCH_ITEMS: ({ commit, state }, { ids }) => {
        // on the client, the store itself serves as a cache.
        // only fetch items that we do not already have, or has expired (3 minutes)
        const now = Date.now()
        ids = ids.filter(id => {
        const item = state.items[id]
        if (!item) {
            return true
        }
        if (now - item.__lastUpdated > 1000 * 60 * 3) {
            return true
        }
        return false
        })
        if (ids.length) {
        return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
        } else {
        return Promise.resolve()
        }
    },

    FETCH_USER: ({ commit, state }, { id }) => {
        console.log('获取用户')
        return state.users[id]
        ? Promise.resolve(state.users[id])
        : fetchUser(id).then(user => commit('SET_USER', { id, user }))
    },
    FETCH_ABOUT: ({ commit, state }, { id }) => {
        console.log('获取用户')
        if (state.about) {
            return Promise.resolve(state.about)
        } else {
            state.about = '这是关于的内容'
            // return Promise.resolve(state.about)
            // 从数据库获取数据

            // 从接口获取数据
            // return http.get('/').then(
            //     response => {
            //         let data = response.data
            //         state.about = data
            //         console.log('获得数据')
            //         return Promise.resolve(state.about)
            //     },
            //     response => {
            //         console.log(response)
            //     })
            
        }
    },
    FETCH_ARTICLE: ({ commit, state }, { id }) => {
        console.log('store获取文章')
        if (state.articles[id]) {
            return Promise.resolve(state.articles[id])
        } else {
            if (id === '1') {
                state.articles[id] = '这是文章1 的内容'
            } else {
                state.articles[id] = '这是文章2 的内容'
            }
            return Promise.resolve('state.articles[id]')
        }
    }
}
