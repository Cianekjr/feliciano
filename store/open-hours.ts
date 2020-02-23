import { OpenHour } from '~/models/definitions'

export interface OpenHourState {
  openHours: OpenHour[]
}

export const state = (): OpenHourState => ({
  openHours: []
})

export const actions = {
  async getOpenHours ({ commit }: any) {
    const response: Response = await fetch('/getOpenHours')
    const data = await response.json()
    commit('setOpenHours', data)
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
