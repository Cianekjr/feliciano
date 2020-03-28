export interface ContactState {
  name: String,
  email: String,
  subject: String,
  message: String
}

export const state = (): ContactState => ({
  name: '',
  email: '',
  subject: '',
  message: ''
})

export const actions = {
  async sendMessage ({ state }: any, { $axios }: any) {
    await $axios.post('/api/sendMessage', {
      ...state
    })
  }
}

export const mutations = {
  setName (state: ContactState, name: String) {
    state.name = name
  },
  setEmail (state: ContactState, email: String) {
    state.email = email
  },
  setSubject (state: ContactState, subject: String) {
    state.subject = subject
  },
  setMessage (state: ContactState, message: String) {
    state.message = message
  }
}

export const getters = {
  name: (state: ContactState) => state.name,
  email: (state: ContactState) => state.email,
  subject: (state: ContactState) => state.subject,
  message: (state: ContactState) => state.message
}
