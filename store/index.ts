import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import viewport from '~/store/viewport'

// eslint-disable-next-line import/no-mutable-exports
export let viewportStore: viewport

function initialiseStores (store: Store<any>): void {
  viewportStore = getModule(viewport, store)
}

const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
