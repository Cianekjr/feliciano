import { MenuDishes } from '~/models/definitions'

export interface MenuDishesState {
  dishes: MenuDishes[]
}

export const state = (): MenuDishesState => ({
  dishes: []
})

export const actions = {
  async getMenuDishes ({ commit }: any, category: String) {
    const response: Response = await fetch(`/getMenuDishes/${category}`)
    const data = await response.json()
    commit('setMenuDishes', data)
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
