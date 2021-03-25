import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

// 引入modules
import common from './modules/common'
import routers from './modules/routers'
import sidebar from './modules/sidebar'
import menu from './modules/system/menu'
import paramGroup from './modules/system/param/group'

const modules = {
  common,
  routers,
  sidebar,
  menu,
  paramGroup
}

export default new Vuex.Store({
  modules,
});