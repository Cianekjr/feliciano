import { OpenHour } from '~/models/definitions'

export interface OpenHourState {
  openHours: OpenHour[]
}

export const state = (): OpenHourState => ({
  openHours: []
})

export const actions = {
  async getOpenHours ({ commit }: any, { $axios }: any) {
    const response = await $axios.get('/api/getOpenHours')
    commit('setOpenHours', response?.data)
  }
}

export const mutations = {
  setOpenHours (state: OpenHourState, openHours: OpenHour[]) {
    state.openHours = openHours
  }
}

export const getters = {
  openHours: (state: OpenHourState) => state.openHours
}
