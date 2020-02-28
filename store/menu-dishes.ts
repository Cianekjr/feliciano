import { MenuDishes } from '~/models/definitions'

export interface MenuDishesState {
  dishes: MenuDishes[]
}

export const state = (): MenuDishesState => ({
  dishes: []
})

export const actions = {
  async getMenuDishes ({ commit }: any, { $axios, category } : any) {
    const response = await $axios?.get('/getMenuDishes', {
      params: {
        category
      }
    })
    commit('setMenuDishes', response?.data || [])
  }
}

export const mutations = {
  setMenuDishes (state: MenuDishesState, dishes: MenuDishes[]) {
    state.dishes = dishes
  }
}

export const getters = {
  menuDishes: (state: MenuDishesState) => state.dishes
}
