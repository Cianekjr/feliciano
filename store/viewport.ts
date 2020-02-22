import { Viewport } from '~/models/definitions'

export interface ViewportState {
  viewport: Viewport
}

export const state = (): ViewportState => ({
  viewport: {
    width: 0,
    height: 0
  }
})

export const mutations = {
  setViewport (state: ViewportState, viewport: Viewport) {
    state.viewport = viewport
  }
}

export const getters = {
  isMobile: (state: ViewportState) => state.viewport.width < 768
}
