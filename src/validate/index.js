import Vue from 'vue';
import {
  // ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from 'vee-validate';
import * as rules from "vee-validate/dist/rules";
import tw from "vee-validate/dist/locale/zh_TW.json";
// 使用中文語系
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize("zh_TW", tw);

// 自訂義方法
extend('secret', value => {
  if (value.length > 8) {
    return true;
  }
  return '{_field_} 長度須達8字元'
});

// Register it globally
// Vue.component("ValidationObserver", ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);