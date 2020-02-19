import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import ViewportModule from '~/store/viewport'

// eslint-disable-next-line import/no-mutable-exports
export let viewportStore: ViewportModule

function initialiseStores (store: Store<any>): void {
  viewportStore = getModule(ViewportModule, store)
}

const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
