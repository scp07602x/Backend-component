export default {
  space() {
    return localStorage;
  },

  getitem(key) {
    return this.space().getItem(key);
  },

  setitem(key, value) {
    return this.space().setItem(key, value);
  },

  removeitem(key) {
    return this.space().removeItem(key);
  }
}