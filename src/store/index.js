/* {[The file is published on the basis of YetiForce Public License 3.0 that can be found in the following directory: licenses/LicenseEN.txt or yetiforce.com]} */

import Vue from 'vue'
import Vuex from 'vuex'
import Objects from 'src/utilities/Objects.js'
import mutations from './mutations.js'
import ModuleLoader from '../ModuleLoader.js'
// modules
import Debug from './Debug'
import Env from './Env'
import Users from './Users'
import Menu from './Menu'
import Url from './Url'
import Language from './Language'

Vue.use(Vuex)

let modules = {
  Debug,
  Env,
  Menu,
  Url,
  Users,
  Language
}

if (typeof window.modules !== 'undefined') {
  modules = ModuleLoader.loadStores(modules, window.modules)
  console.log('stores', modules)
}

let store = new Vuex.Store({
  modules,
  mutations: {
    [mutations.Global.update](state, payload) {
      state = Objects.mergeDeepReactive(state, payload)
    }
  }
})

export default store