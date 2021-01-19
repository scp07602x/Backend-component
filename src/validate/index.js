import Vue from 'vue';
import {
  ValidationProvider,
  extend
} from 'vee-validate/dist/vee-validate.full';

extend('secret', value => {
  if (value.length < 8) {
    return true;
  }
  return '{_field_}長度須達8字元'
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);