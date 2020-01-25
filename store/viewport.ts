import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

interface Viewport {
  width: Number,
  height: Number
}

@Module({
  name: 'viewport',
  stateFactory: true,
  namespaced: true
})

class ViewportModule extends VuexModule {
  viewport: Viewport = {
    width: 0,
    height: 0
  }

  @Mutation
  setViewport (viewport: Viewport) {
    this.viewport.width = viewport.width
    this.viewport.height = viewport.height
  }

  get isMobile () {
    return this.viewport.width < 768
  }
}

export default ViewportModule
