import { MenuDishes } from '~/models/definitions'

export interface GroupDishesState {
  dishes: MenuDishes[]
}

export const state = (): GroupDishesState => ({
  dishes: []
})

export const actions = {
  async getRandomDishes ({ commit }: any, { $axios } : any) {
    const response = await $axios?.get('/api/getRandomDishes')
    commit('setRandomDishes', response?.data || [])
  }
}

export const mutations = {
  setRandomDishes (state: GroupDishesState, dishes: MenuDishes[]) {
    state.dishes = dishes
  }
}

export const getters = {
  groupDishes: (state: GroupDishesState) => state.dishes
}
