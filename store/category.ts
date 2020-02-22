import { Category } from '~/models/definitions'

export interface CategoryState {
  categories: Category[]
}

export const state = (): CategoryState => ({
  categories: []
})

export const actions = {
  async getCategories ({ commit }: any) {
    const response: Response = await fetch('/getCategories')
    const data = await response.json()
    commit('setCategories', data)
  }
}

export const mutations = {
  setCategories (state: CategoryState, categories: Category[]) {
    state.categories = categories
  }
}

export const getters = {
  categoriesMenu: (state: CategoryState) => state.categories
}
