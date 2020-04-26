export interface ReservationState {
  name: String,
  email: String,
  phone: String,
  date: String,
  time: String,
  person: String
}

export const state = (): ReservationState => ({
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  person: ''
})

export const actions = {
  async makeReservation ({ state }: any, { $axios }: any) {
    await $axios.post('/api/makeReservation', {
      ...state
    })
  }
}

export const mutations = {
  setName (state: ReservationState, name: String) {
    state.name = name
  },
  setEmail (state: ReservationState, email: String) {
    state.email = email
  },
  setPhone (state: ReservationState, phone: String) {
    state.phone = phone
  },
  setDate (state: ReservationState, date: String) {
    state.date = date
  },
  setTime (state: ReservationState, time: String) {
    state.time = time
  },
  setPerson (state: ReservationState, person: String) {
    state.person = person
  }
}

export const getters = {
  name: (state: ReservationState) => state.name,
  email: (state: ReservationState) => state.email,
  phone: (state: ReservationState) => state.phone,
  date: (state: ReservationState) => state.date,
  time: (state: ReservationState) => state.time,
  person: (state: ReservationState) => state.person
}
