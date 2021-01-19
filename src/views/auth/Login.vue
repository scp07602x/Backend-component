<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-gray-600 text-sm font-bold">Sign in</h6>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <div class="relative w-full mb-3">
                <validation-provider
                  rules="required|secret"
                  v-slot="{ errors }"
                  name="帳號"
                >
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    *帳號
                  </label>
                  <input
                    type="text"
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="請輸入帳號"
                    v-model="loginForm.username"
                  />
                  <span class="text-red-700 text-xs font-bold mb-2">{{ errors[0] }}</span>
                </validation-provider>
              </div>

              <div class="relative w-full mb-3">
                <validation-provider
                  rules="required|secret"
                  v-slot="{ errors }"
                  name="密碼"
                >
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    *密碼
                  </label>
                  <input
                    type="password"
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="請輸入密碼"
                    v-model="loginForm.password"
                  />
                  <span class="text-gray-700 text-xs font-bold mb-2">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    v-model="loginForm.remember"
                  />
                  <span class="ml-2 text-sm font-semibold text-gray-700">
                    記住我
                  </span>
                </label>
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="signIn()"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="text-gray-300">
            <small>無帳號或忘記密碼請洽資訊部</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        remember: "",
      },
    };
  },

  // created() {
  //   console.log(this.$validate);
  // },

  methods: {
    signIn() {
      console.log(this.loginForm);
    },
  },
};
</script>
