/*
  Actions for both importer and exporter
*/
import { DEFAULT_PROFILE_NAME } from '@/config'

export default {
  setInitialData ({ commit, getters }, data) {
    commit('SET_INITIAL_DATA', data)
    commit('SET_CURRENT_PROFILE_NAME', DEFAULT_PROFILE_NAME)
    commit('SET_CURRENT_PROFILE', getters.currentProfile)
  },
  setCurrentProfileName ({ commit, getters }, profile) {
    commit('SET_CURRENT_PROFILE_NAME', profile)
    commit('SET_CURRENT_PROFILE', getters.currentProfile)
  },
  applyProfile ({ commit }, { name, profile }) {
    commit('ADD_PROFILE', { name, profile })
    commit('SET_CURRENT_PROFILE_NAME', name)
  },
  deleteProfile ({ commit }, name) {
    commit('DELETE_PROFILE', name)
  }
}
