import { Review } from '~/models/definitions'

export interface ReviewState {
  reviews: Review[]
}

export const state = (): ReviewState => ({
  reviews: []
})

export const actions = {
  async getReviews ({ commit }: any, { $axios }: any) {
    const response = await $axios.get('/api/getReviews')
    commit('setReviews', response?.data)
  }
}

export const mutations = {
  setReviews (state: ReviewState, reviews: Review[]) {
    state.reviews = reviews
  }
}

export const getters = {
  reviews: (state: ReviewState) => state.reviews
}
