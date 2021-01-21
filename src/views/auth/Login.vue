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
              <form @submit.prevent="handleSubmit(signIn)">
                <div class="relative w-full mb-3">
                  <span
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  >
                    *帳號
                  </span>
                  <TextInput
                    v-model="loginForm.username"
                    name="帳號"
                    rules="required"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <span
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    *密碼
                  </span>
                  <TextInput
                    v-model="loginForm.password"
                    name="密碼"
                    rules="required|secret"
                  />
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

// // layouts
// import Admin from "@/layouts/Admin.vue";
// import Auth from "@/layouts/Auth.vue";
// import Setting from "@/layouts/Setting.vue";

// // views for Admin layout
// import Dashboard from "@/views/admin/Dashboard.vue";
// import Settings from "@/views/admin/Settings.vue";
// import Tables from "@/views/admin/Tables.vue";
// // import Maps from "@/views/admin/Maps.vue";

// // views for Setting Layout
// import Managers from "@/views/setting/managers/Managers.vue";

// import AdPage from "@/views/setting/adpage/AdPage.vue";
// import PageEdit from "@/views/setting/adpage/PageEdit.vue";
// // import Editor from "@/views/setting/Editor.vue";

// // views for Auth layout
// import Login from "@/views/auth/Login.vue";
// import Register from "@/views/auth/Register.vue";
// // import axios from "axios";

export default {
  components: {
    TextInput,
  },

  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },

  created() {
    // console.log(this.$router);
    let token = localStorage.getItem("token");
    // 如果有token就判斷token是否過期
    if (token) {
      // 這邊判斷token有沒有過期，如果沒有過期仍有效就導向首頁
      this.$router.replace({
        path: "/admin/dashboard",
      });
    }
  },

  methods: {
    signIn() {
      if (this.loginForm.username !== "" || this.loginForm.password !== "") {
        this.$axios
          .post("/login", {
            su_uid: this.loginForm.username,
            su_pass: this.loginForm.password,
          })
          .then((response) => {
            if (response.StatusCode == 200) {
              localStorage.token = response.Data.send_str;

              // 登入的時候依照data給路由
              let testrouter = JSON.stringify([
                {
                  "path": "/test",
                  "children": [
                    { "path": "/test/a", "name": "我是A" },
                    { "path": "/test/b", "name": "我是B" },
                  ],
                },
              ]);

              // 先將路由存在storage
              localStorage.routers = testrouter;
              // 再將路由存在store
              this.$store.state.routers = testrouter;
              // 然後添加路由進去，但是畫面重新整理後路由會不見，所以必須到在路由index中加入他加入完就清除
              this.$router.addRoutes(testrouter);

              this.$router.replace({
                path: "/admin/dashboard",
              });
            }
          });
      }
    },
  },
};
</script>
