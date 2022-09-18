// Enables this.$store to be used within codebase
import { Store } from 'vuex'

import { StateInterface } from './store/index'

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<StateInterface>
  }
}
