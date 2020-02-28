export interface NewsletterState {
  email: String
}

export const state = (): NewsletterState => ({
  email: ''
})

export const actions = {
  async sendNewsletter ({ state }: any, { $axios }: any) {
    await $axios.post('/sendNewsletter', {
      ...state
    })
  }
}

export const mutations = {
  setEmail (state: NewsletterState, email: String) {
    state.email = email
  }
}

export const getters = {
  email: (state: NewsletterState) => state.email
}
