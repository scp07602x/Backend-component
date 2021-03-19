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
            <!-- handleSubmit為套件函式不可變更 -->
            <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(login)">
                <div class="relative w-full mb-3">
                  <span
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  >
                    *帳號
                  </span>
                  <TextInput v-model="account" name="帳號" classStyle="w-full" />
                </div>
                <div class="relative w-full mb-3">
                  <span
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    *密碼
                  </span>
                  <TextInput v-model="password" name="密碼" type="password" classStyle="w-full"/>
                </div>
                <hr class="mt-6 border-b-1 border-gray-400" />
                <div class="text-center mt-6">
                  <button
                    class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </ValidationObserver>
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
import TextInput from "@/components/ValidateField/TextValidate.vue";
// import defaultProgram from '@/utility';

export default {
  components: {
    TextInput,
  },

  data() {
    return {
      account: "System",
      password: "System123",
    };
  },

  methods: {
    login() {
      if (this.account !== "" || this.password !== "") {
        this.$api
          .serviceLogin(
            this.account.replace(/\s*/g, ""),
            this.password.replace(/\s*/g, "")
          )
          .then((response) => {
            let token = `Bearer ${response.token}`;
            this.$storage.setitem("token", token);
            this.$store.dispatch("common/token", token);
          })
          .finally(async () => {
            if (this.$storage.getitem("token")) {
              this.$utility.necessaryParams();
              this.$router.replace({
                path: "/",
              });
            }
          });
      }
    },
  },
};
</script>
