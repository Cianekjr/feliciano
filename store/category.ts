import { Category } from '~/models/definitions'

export interface CategoryState {
  categories: Category[]
}

export const state = (): CategoryState => ({
  categories: []
})

export const actions = {
  async getCategories ({ commit }: any, { $axios }: any) {
    const response = await $axios.get('/getCategories')
    commit('setCategories', response?.data)
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
