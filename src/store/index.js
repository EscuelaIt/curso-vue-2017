import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    latestSearches: []
}

const getters = {
    latestSearches: state => state.latestSearches
}

const mutations = {
    LATEST_SEARCHES (state, data) {
        if (!state.latestSearches.includes(data)) {
            state.latestSearches.push(data)
        }
    }
}

const actions = {
    latestSearches ({ commit }, payload) {
        const ENDPOINT = `${Vue.config.movues.ENDPOINTS.SEARCH}${payload}`

        return window.fetch(ENDPOINT)
            .then(response => response.json())
            .then(json => {
                const IS_OK = json.Response === 'True'

                if (!IS_OK) {
                    throw new Error(json.Error)
                }

                commit('LATEST_SEARCHES', payload)

                return json.Search
            })
            .catch(err => {
                throw err.message
            })
    }
}

export default new Vuex.Store({
    strict: true,
    state,
    mutations,
    actions,
    getters
})
